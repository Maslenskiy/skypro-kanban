import * as S from './cards.styled.js'
import { CardsDate } from '../CardsDate/CardsDate.jsx';
import * as St from '../Main/main.styled.js'

export function Cards({ cards, name }) {
  return (
    <St.MainColumn>
      <S.Cards>
        <St.ColumnTitle>
          <p>{name}</p>
        </St.ColumnTitle>
        {cards.map((el) => (
          <div key={el.id}>
            <S.Cards>
              <S.CardsItem key={el.id}>
                <S.CardDiv>
                  <S.CardGroup>
                    <S.CardTheme $color = {el.color}>
                      <S.CardName>{el.theme}</S.CardName>
                    </S.CardTheme >
                    <a href="#popBrowse" target="_self">
                      <S.CardBtn>
                        <S.Dot />
                        <S.Dot />
                        <S.Dot />
                      </S.CardBtn>
                    </a>
                  </S.CardGroup>
                  <S.CardContent>
                    <a href="" target="_blank">
                      <S.CardTitle>{el.title}</S.CardTitle>
                    </a>
                    <CardsDate key={el.id} date={el.date} />
                  </S.CardContent>
                </S.CardDiv>
              </S.CardsItem>
            </S.Cards>
          </div>
        ))}
      </S.Cards>
    </St.MainColumn>
  );
}
