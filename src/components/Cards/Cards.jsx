import { CardsDate } from '../CardsDate/CardsDate.jsx';

export function Cards({ cards, name }) {
  return (
    <div className="main__column column">
      <div className="cards">
        <div className="column__title">
          <p>{name}</p>
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
                    <CardsDate key={el.id} date={el.date} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
