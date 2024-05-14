import { Container } from '../../global.styled.js';
import MainColumn from '../MainColumn/MainColumn.jsx';
import * as S from './main.styled.js'
function Main({ cards, isLoading, errorMsg }) {
  return (
    <>
      <S.Main>
        <Container>
          <S.MainBlock>
            <S.MainContent>
              {errorMsg ?<p>{errorMsg}</p> : (<>
                {isLoading ? (
                'Идет загрузка......'
              ) : (
                <>
                  <MainColumn cards={cards} />
                </>
              )}</>)}
            </S.MainContent>
          </S.MainBlock>
        </Container>
      </S.Main>
    </>
  );
}
export default Main;
