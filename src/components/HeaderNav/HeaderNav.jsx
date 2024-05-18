import { useState } from 'react';
import * as S from '../Header/header.styled.js';
import { Link } from 'react-router-dom';
import { paths } from '../../routesPath.js';
function HeaderNav({ addCard, isAuth }) {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <S.HeaderNav>
        <S.HeaderBtnNew id="btnMainNew">
          <S.HeaderBtnNewLink href="#popNewCard" onClick={addCard}>
            Создать новую задачу
          </S.HeaderBtnNewLink>
        </S.HeaderBtnNew>
        <S.HeaderUser
          href="#user-set-target"
          className=" _hover02"
          onClick={clickHandler}
        >
          {isAuth.name}
        </S.HeaderUser>
        {isOpen && (
          <>
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <a href="">x</a> */}
              <p className="pop-user-set__name">{isAuth.name}</p>
              <p className="pop-user-set__mail">{isAuth.login}</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <Link to={paths.EXIT}>Выйти</Link>
              </button>
            </div>
          </>
        )}
      </S.HeaderNav>
    </>
  );
}
export default HeaderNav;
