import { Cards } from '../Cards/Cards.jsx';
function MainColumn({ cards }) {
  return (
    <>
      <Cards
        cards={cards.filter((el) => el.status === 'Без статуса')}
        name="Без статуса"
      />
      <Cards
        cards={cards.filter((el) => el.status === 'Нужно сделать')}
        name="Нужно сделать"
      />
      <Cards
        cards={cards.filter((el) => el.status === 'В работе')}
        name="В работе"
      />
      <Cards
        cards={cards.filter((el) => el.status === 'Тестирование')}
        name="Тестирование"
      />
      <Cards
        cards={cards.filter((el) => el.status === 'Готово')}
        name="Готово"
      />
    </>
  );
}

export default MainColumn;
