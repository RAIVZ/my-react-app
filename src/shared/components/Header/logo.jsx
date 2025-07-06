import React from "react";
import style from "./logo.module.css";
import logo from "../../assets/Header-assets/logo.png";
const Logo = () => {
  return (
    <div className={style.logoBlock}>
      <a href="/" className={style.logo}>
        <img src={logo} alt="Лого" className={style.logoImage} width={25} />
        <span className={style.logoText}>Notes</span>
      </a>
    </div>
  );
};

export default Logo;
