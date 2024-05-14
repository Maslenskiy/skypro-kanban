import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Pages/MainPage/MainPage';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage';
import { paths } from './routesPath';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';
import { PopExit } from './Pages/Popups/PopExitPage/PopExit';
import PopBrowse from './components/Header/Popups/PopBrowse/PopBrowse';

function getLocalStorage(){
    let user
try{
user = JSON.parse(localStorage.getItem('user'))
return user
}

catch(err) {
return ('')
}
}

export const AppRoutes = () =>{
    const [isAuth, setIsAuth] = useState(getLocalStorage)
    return (
        <Routes>
            <Route element={ <PrivateRoute isAuth={isAuth}/>}>
                 <Route path={paths.MAIN} element={<MainPage isAuth={isAuth}/>}>
                    <Route 
                        path={paths.EXIT} 
                        element={<PopExit setIsAuth={setIsAuth}/>}
                    />
                    <Route path={paths.CARD_ID} element={<PopBrowse />}/>
                 </Route>
            </Route>
            <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage />}/>
            <Route path={paths.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
    )
}