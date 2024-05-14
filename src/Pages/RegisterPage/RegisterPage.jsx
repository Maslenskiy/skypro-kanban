import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../global.styled';
import { paths } from '../../routesPath';
import { register } from '../../Api/auth';
import { useState } from 'react';

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')

  const [inputValue, setInputValue] = useState({
        login: '',
        name: '',
        password: '',
  })


  const onChangeInput = (e) =>{
   
    const {value, name} = e.target
    setInputValue({...inputValue, [name]:value})

  }

  const registerHandler = (e) =>{
    e.preventDefault()

    const {login, name, password} = inputValue

    if(!login || !name || !password){
      return setErrorMsg('Заполните все поля')
    }

    register(inputValue).then(()=>{
      setErrorMsg('')
      navigate(paths.LOGIN)
    }).catch((err)=>{
      setErrorMsg(err.message)
    })
  }
  return (
    <Wrapper>
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                onChange={onChangeInput}
                value={inputValue.name}
                className="modal__input first-name"
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
              />
              <input
                onChange={onChangeInput}
                value={inputValue.login}
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <input
                onChange={onChangeInput}
                value={inputValue.password}
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <p style={{color: 'red'}}>{errorMsg}</p>
              <button
                type='button'
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
              >
                <a onClick={registerHandler}>Зарегистрироваться</a>{' '}
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
