import MainColumn from "./MainColumn.jsx"
function Main({cards, isLoading}){
  
    return (
        <>
        <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {isLoading ? "Идет загрузка......" : (
                <>
                 <MainColumn cards={cards}/>
                </>
              )} 
            </div>
          </div>
        </div>
      </main>
        </>
    )
}
export default Main