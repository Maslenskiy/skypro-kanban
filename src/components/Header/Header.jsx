import HeaderLogo from "./HeaderLogo.jsx";
import HeaderNav from "./HeaderNav.jsx";

function Header(){
    return (
        <>
         <header className="header">
        <div className="container">
          <div className="header__block">
            <HeaderLogo />
            <HeaderNav />
          </div>
        </div>
      </header>
        </>
    )
}
export default Header