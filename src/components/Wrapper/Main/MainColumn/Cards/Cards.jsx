import { CardDate } from './CardDate/CardDate';
import {
  SCardBtn,
  SCardContent,
  SCardGroup,
  SCards,
  SCardsCard,
  SCardsItem,
  SCardTheme,
  SCardTitle,
  SCardTitles,
} from './Cards.styled';

export default function Cards({ color, cardTheme, title }) {
  // Получаем модификатор темы (например, _orange) из cardTheme
  const themeMod = cardTheme?.split(' ').find((cls) => cls.startsWith('_'));
  return (
    <SCards>
      <SCardsItem>
        <SCardsCard>
          <SCardGroup>
            <SCardTheme $theme={themeMod}>
              <SCardTitle $color={color}>{title}</SCardTitle>
            </SCardTheme>
            <a href="#popBrowse" target="_self">
              <SCardBtn>
                <div />
                <div />
                <div />
              </SCardBtn>
            </a>
          </SCardGroup>
          <SCardContent>
            <a href="" target="_blank">
              <SCardTitles>Название задачи</SCardTitles>
            </a>
            <CardDate />
          </SCardContent>
        </SCardsCard>
      </SCardsItem>
    </SCards>
  );
}
