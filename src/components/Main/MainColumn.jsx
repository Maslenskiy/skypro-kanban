import { CardsOneColumn } from "./Cards.jsx";
import { CardsTwoColumn } from "./Cards.jsx";
import { CardsThreeColumn } from "./Cards.jsx";
import { CardsFourColumn } from "./Cards.jsx";
import { CardsFiveColumn } from "./Cards.jsx";
function MainColumn(){
    return (
        <>
        <div className="main__column column">
                <div className="column__title">
                  <p>Без статуса</p>
                </div>
                <CardsOneColumn />
              </div>
                <CardsTwoColumn />
                <CardsThreeColumn />
                <CardsFourColumn />
                <CardsFiveColumn />
        </>
    )
}

export default MainColumn 