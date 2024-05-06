import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Page/MainPage/MainPage';
import { LoginPage } from './Page/LoginPage/LoginPage';
import { RegisterPage } from './Page/RegisterPage/RegisterPage';
import { patch } from './routesPath';
import PrivateRoute from './PrivateRoute';
import { useState } from 'react';
import { NotFoundPage } from './Page/NotFoundPage/NotFoundPage';
import { PopExit } from './Page/Popups/PopExitPage/PopExit';
import PopBrowse from './components/Header/Popups/PopBrowse/PopBrowse';
export const AppRoutes = () =>{
    const [isAuth, setIsAuth] = useState(false)
    return (
        <Routes>
            <Route element={ <PrivateRoute isAuth={isAuth}/>}>
                 <Route path={patch.MAIN} element={<MainPage/>}>
                    <Route path={patch.EXIT} element={<PopExit setIsAuth={setIsAuth}/>}/>
                    <Route path={patch.CARD_ID} element={<PopBrowse />}/>
                 </Route>
            </Route>
                <Route path={patch.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>}/>
                <Route path={patch.REGISTER} element={<RegisterPage />}/>
                <Route path={patch.NOT_FOUND} element={<NotFoundPage/>}/>
      </Routes>
    )
}