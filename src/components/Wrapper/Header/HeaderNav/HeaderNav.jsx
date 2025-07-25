import { useState } from 'react';
import PopUser from './PopUser/PopUser';
import { SHeaderBtnMainNew, SHeaderNav, SHeaderUser } from './HeaderNav.styled';

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUser = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <SHeaderNav>
      <SHeaderBtnMainNew>
        <a href="#popNewCard">Создать новую задачу</a>
      </SHeaderBtnMainNew>
      <a
        href="#user-set-target"
        onClick={togglePopUser}
        className={<SHeaderUser />}
      >
        Ivan Ivanov
      </a>
      {isOpen && <PopUser />}
    </SHeaderNav>
  );
}
