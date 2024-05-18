import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../global.styled';
import { paths } from '../../routesPath';
import { signIn } from '../../Api/auth';
import { useState } from 'react';

export const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')

  const [inputValue, setInputValue] = useState({
        login: '',
        password: '',
  })


  const onChangeInput = (e) =>{
   
    const {value, name} = e.target
    setInputValue({...inputValue, [name]:value})

  }

  
  const loginHandler = (e) => {
    e.preventDefault()

    const {login, password} = inputValue

    if(!login || !password){
      return setErrorMsg('Заполните все поля')
    }

  signIn(inputValue).then((res)=>{
      setErrorMsg('')
      setIsAuth(res.user)
      localStorage.getItem('user', JSON.stringify(res.user))
      navigate(paths.MAIN)
    }).catch((err)=>{
      setErrorMsg(err.message)
    })
  };
  return (
    <Wrapper>
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                onChange={onChangeInput}
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                onChange={onChangeInput}
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
               <p style={{color: 'red'}}>{errorMsg}</p>
              <button
                onClick={loginHandler}
                className="modal__btn-enter _hover01"
                id="btnEnter"
              >
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
