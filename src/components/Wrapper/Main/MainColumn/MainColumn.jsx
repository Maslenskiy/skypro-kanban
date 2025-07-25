import Cards from './Cards/Cards';
import { SMainColumn, SMainColumnTitle } from './MainColumn.styled';
export default function MainColumn({ status, cardList }) {
  return (
    <SMainColumn>
      <SMainColumnTitle>
        <p>{status}</p>
      </SMainColumnTitle>
      {cardList.map((el) => (
        <Cards
          key={el.id} // 🔥 Важно: нужен уникальный `key` для каждого элемента в списке
          color={el.color}
          cardTheme={el.cardTheme}
          title={el.theme}
        />
      ))}
    </SMainColumn>
  );
}
