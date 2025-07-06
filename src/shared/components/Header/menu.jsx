import React from "react";
import style from "./menu.module.css";

const Menu = () => {
  return (
    <div className={style.nav}>
      <nav className={style.navMenu}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <a href="/">Главная</a>
          </li>
          <li className={style.navItem}>
            <a href="/">Статьи</a>
          </li>
          <li className={style.navItem}>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
