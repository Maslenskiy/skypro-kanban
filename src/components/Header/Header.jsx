import { Container } from "../../global.styled.js";
import HeaderLogo from "../HeaderLogo/HeaderLogo.jsx";
import HeaderNav from "../HeaderNav/HeaderNav.jsx";
import * as S from './header.styled.js';
function Header({addCard, isAuth }){
    return (
        <>
         <S.Header>
        <Container>
          <S.HeaderBlock>
            <HeaderLogo />
            <HeaderNav isAuth={isAuth} addCard={addCard}/>
          </S.HeaderBlock>
        </Container>
      </S.Header>
        </>
    )
}
export default Header