import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import PopExitAccount from "../Header/popups/PopExitAccount.jsx";
import PopNewCard from "../Header/popups/PopNewCard.jsx";
import PopBrowse from "../Header/popups/PopBrowse.jsx";


function Wrapper(){
    return (
        <>
      <div className="wrapper">
        {/* Popup */}
      <PopExitAccount />
      <PopNewCard />
      <PopBrowse />
     {/*  Header */}
      <Header />
     {/* Тут Main */}
      <Main />
    </div>
       </>
      )
}
export default Wrapper