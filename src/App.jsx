import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopExitAccount from "./components/Header/Popups/PopExitAccount.jsx";
import PopNewCard from "./components/Header/Popups/PopNewCard.jsx";
import PopBrowse from "./components/Header/Popups/PopBrowse.jsx";
import './App.css'
import { useEffect, useState } from "react";
import { task } from "./Data.js";


function App() {
  const [cards, setCards] = useState(task)
  const [isLoading, setIsLoading] = useState(false)

  function addCard (e){
    e.preventDefault()
    const newCard = {
      id: cards[cards.length - 1].id + 1,
      theme: "WebDesing",
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' }),
      title: "Название задачи",
      status: "Без статуса",
      colorTheme: "card__theme _orange",
      color:"_orange"
     }
     setCards([...cards, newCard])
  }

  useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])

  return (
    <>
     <div className="wrapper">
        {/* Popup */}
      <PopExitAccount />
      <PopNewCard />
      <PopBrowse />
     {/*  Header */}
      <Header addCard = {addCard}/>
     {/* Тут Main */}
      <Main cards={cards} isLoading={isLoading}/>
    </div>
    </>
  )
}

export default App
