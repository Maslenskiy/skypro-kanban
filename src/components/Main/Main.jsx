import { Container } from '../../global.styled.js';
import MainColumn from '../MainColumn/MainColumn.jsx';
import * as S from './main.styled.js'
function Main({ cards, isLoading }) {
  return (
    <>
      <S.Main>
        <Container>
          <S.MainBlock>
            <S.MainContent>
              {isLoading ? (
                'Идет загрузка......'
              ) : (
                <>
                  <MainColumn cards={cards} />
                </>
              )}
            </S.MainContent>
          </S.MainBlock>
        </Container>
      </S.Main>
    </>
  );
}
export default Main;
