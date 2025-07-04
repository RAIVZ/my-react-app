import React from "react";
import style from "./menu.module.css";

const Menu = () => {
  return (
    <div className={style.nav}>
      <nav className={style.navMenu}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <a href="/">ГЛАВНАЯ</a>
          </li>
          <li className={style.navItem}>
            <a href="/">ТАВЕРНА</a>
          </li>
          <li className={style.navItem}>
            <a href="/">НОВОСТИ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
