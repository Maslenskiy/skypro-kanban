import HeaderLogo from "../HeaderLogo/HeaderLogo.jsx";
import HeaderNav from "../HeaderNav/HeaderNav.jsx";

function Header({addCard}){
    return (
        <>
         <header className="header">
        <div className="container">
          <div className="header__block">
            <HeaderLogo />
            <HeaderNav addCard={addCard}/>
          </div>
        </div>
      </header>
        </>
    )
}
export default Header