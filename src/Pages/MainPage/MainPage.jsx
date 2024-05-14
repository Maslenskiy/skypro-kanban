import { useEffect, useState } from 'react';
import  Main  from '../../components/Main/Main.jsx';
import Header from '../../components/Header/Header.jsx';
import PopNewCard from '../../components/Header/Popups/PopNewCard/PopNewCard.jsx';
import { Wrapper } from '../../global.styled.js'
import { Outlet } from 'react-router-dom';
import { getCards } from '../../Api/cardsApi.js';
export const MainPage = ({isAuth}) =>{
    const [cards, setCards] = useState([]);
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    function addCard(e) {
        e.preventDefault();
        const newCard = {
          _id: cards[cards.length - 1]._id + 1,
          theme: 'WebDesing',
          date: new Date().toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          }),
          title: 'Название задачи',
          status: 'Без статуса',
          colorTheme: 'card__theme _orange',
          color: '_orange',
        };
        setCards([...cards, newCard]);
      }
    
      useEffect(() => {
        setIsLoading(true);

        getCards(isAuth.token).then((res) =>{
          setErrorMsg('')
          setCards(res.tasks)
          setIsLoading(false);
        }).catch((err)=>{
          setErrorMsg(err.message)
        }).finally(() =>{
          setIsLoading(false)
        })
      }, []);

    return (
        <Wrapper>
        <PopNewCard />
        <Header isAuth={isAuth} addCard={addCard}/>
        <Main errorMsg={errorMsg} cards={cards} isLoading={isLoading} />
        <Outlet />
      </Wrapper>
    )
}