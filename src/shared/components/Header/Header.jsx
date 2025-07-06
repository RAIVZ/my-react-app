import React from "react";
import style from "./header.module.css";
import Logo from "./logo";
import Menu from "./menu";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.HeadContent}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
export default Header;
