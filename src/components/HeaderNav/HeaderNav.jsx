import { useState } from 'react';
import * as S from '../Header/header.styled.js';
import { Link } from 'react-router-dom';
import { paths } from '../../routesPath.js';
function HeaderNav({ addCard }) {
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
          Ivan Ivanov
        </S.HeaderUser>
        {isOpen && (
          <>
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <a href="">x</a> */}
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
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
