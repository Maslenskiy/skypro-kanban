import { CardsDate } from "./CardsDate.jsx"

export function CardsOneColumn({cards}){


    return (
  
      <div className="cards">
         <div className="column__title">
            <p>Без статуса</p>
          </div>
      {cards.map((el) => (
        <div key={el.id}>
          <div className="cards">
            <div className="cards__item" key={el.id}>
              <div className="cards__card card">
                <div className="card__group">
                  <div className={`card__theme ${el.color}`}> 
                    <p className={el.color}>{el.theme}</p>
                  </div>
                  <a href="#popBrowse" target="_self">
                    <div className="card__btn">
                      <div />
                      <div />
                      <div />
                    </div>
                  </a>
                </div>
                <div className="card__content">
                  <a href="" target="_blank">
                    <h3 className="card__title">{el.title}</h3>
                  </a>
                  <CardsDate key={el.id}  date = {el.date}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    )
}

export function CardsTwoColumn({cards}){
 console.log(cards)
    return (
       <>
  <div className="main__column">
    <div className="column__title">
      <p>Нужно сделать</p>
    </div>
    {cards.map((el) => (
      <div key={el.id} className="cards">
        <div className="cards__item" key={el.id}>
          <div className="cards__card card">
            <div className="card__group">
              <div className={`card__theme ${el.color}`}>
                <p className={el.color}>{el.theme}</p>
              </div>
              <a href="#popBrowse" target="_self">
                <div className="card__btn">
                  <div />
                  <div />
                  <div />
                </div>
              </a>
            </div>
            <div className="card__content">
              <a href="" target="_blank">
                <h3 className="card__title">{el.title}</h3>
              </a>
              <CardsDate key={el.id} date= {el.date}/>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</>

    )
}

export function CardsThreeColumn({cards}){
  return (
    <>
<div className="main__column">
 <div className="column__title">
   <p>В работе</p>
 </div>
 {cards.map((el) => (
   <div key={el.id} className="cards">
     <div className="cards__item" key={el.id}>
       <div className="cards__card card">
         <div className="card__group">
           <div className={`card__theme ${el.color}`}>
             <p className={el.color}>{el.theme}</p>
           </div>
           <a href="#popBrowse" target="_self">
             <div className="card__btn">
               <div />
               <div />
               <div />
             </div>
           </a>
         </div>
         <div className="card__content">
           <a href="" target="_blank">
             <h3 className="card__title">{el.title}</h3>
           </a>
           <CardsDate key={el.id} date={el.date}/>
         </div>
       </div>
     </div>
   </div>
 ))}
</div>
</>

 )
}

export function CardsFourColumn({cards}){
  return (
    <>
<div className="main__column">
 <div className="column__title">
   <p>Тестирование</p>
 </div>
 {cards.map((el) => (
   <div key={el.id} className="cards">
     <div className="cards__item" key={el.id}>
       <div className="cards__card card">
         <div className="card__group">
           <div className={`card__theme ${el.color}`}>
             <p className={el.color}>{el.theme}</p>
           </div>
           <a href="#popBrowse" target="_self">
             <div className="card__btn">
               <div />
               <div />
               <div />
             </div>
           </a>
         </div>
         <div className="card__content">
           <a href="" target="_blank">
             <h3 className="card__title">{el.title}</h3>
           </a>
           <CardsDate key={el.id} date= {el.date}/>
         </div>
       </div>
     </div>
   </div>
 ))}
</div>
</>

 )
}

export function CardsFiveColumn({cards}){
  return (
    <>
<div className="main__column">
 <div className="column__title">
   <p>Готово</p>
 </div>
 {cards.map((el) => (
   <div key={el.id} className="cards">
     <div className="cards__item" key={el.id}>
       <div className="cards__card card">
         <div className="card__group">
           <div className={`card__theme ${el.color}`}>
             <p className={el.color}>{el.theme}</p>
           </div>
           <a href="#popBrowse" target="_self">
             <div className="card__btn">
               <div />
               <div />
               <div />
             </div>
           </a>
         </div>
         <div className="card__content">
           <a href="" target="_blank">
             <h3 className="card__title">{el.title}</h3>
           </a>
           <CardsDate key={el.id} date= {el.date}/>
           {console.log(el.date)}
         </div>
       </div>
     </div>
   </div>
 ))}
</div>
</>

 )
}