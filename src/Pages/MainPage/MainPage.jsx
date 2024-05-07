import { useEffect, useState } from 'react';
import { task } from '../../Data.js';
import  Main  from '../../components/Main/Main.jsx';
import Header from '../../components/Header/Header.jsx';
import PopNewCard from '../../components/Header/Popups/PopNewCard/PopNewCard.jsx';
import { Wrapper } from '../../global.styled.js'
import { Outlet } from 'react-router-dom';
export const MainPage = () =>{
    const [cards, setCards] = useState(task);
    const [isLoading, setIsLoading] = useState(false);

    function addCard(e) {
        e.preventDefault();
        const newCard = {
          id: cards[cards.length - 1].id + 1,
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
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);

    return (
        <Wrapper>
        <PopNewCard />
        <Header addCard={addCard}/>
        <Main cards={cards} isLoading={isLoading} />
        <Outlet />
      </Wrapper>
    )
}