import { CardsOneColumn } from "./Cards.jsx";
import { CardsTwoColumn } from "./Cards.jsx";
import { CardsThreeColumn } from "./Cards.jsx";
import { CardsFourColumn } from "./Cards.jsx";
import { CardsFiveColumn } from "./Cards.jsx";
function MainColumn({cards}){
    return (
        <>
        <div className="main__column column">
                <CardsOneColumn cards = {cards.filter((el) => el.status==="Без статуса")}/>
              </div>
                <CardsTwoColumn  cards = {cards.filter((el) => el.status==="Нужно сделать")} />
                <CardsThreeColumn cards = {cards.filter((el) => el.status==="В работе")} />
                <CardsFourColumn  cards = {cards.filter((el) => el.status==="Тестирование")} />
                <CardsFiveColumn cards = {cards.filter((el) => el.status==="Готово")}/>
        </>
    )
}

export default MainColumn 