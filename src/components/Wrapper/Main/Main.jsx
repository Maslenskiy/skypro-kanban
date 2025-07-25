import { SMain, SMainBlock, SMainContainer, SMainContent } from './Main.styled';
import MainColumn from './MainColumn/MainColumn';
export default function Main({ cardList, status }) {
  return (
    <SMain>
      <SMainContainer>
        <SMainBlock>
          <SMainContent>
            {status.map((status) => {
              const filteredCards = cardList.filter(
                (card) => card.status === status.title
              );
              return (
                <MainColumn
                  key={status.id}
                  status={status.title}
                  cardList={filteredCards}
                />
              );
            })}
          </SMainContent>
        </SMainBlock>
      </SMainContainer>
    </SMain>
  );
}
