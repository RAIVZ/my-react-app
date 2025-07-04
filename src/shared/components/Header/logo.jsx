import React from 'react';
import style from './logo.module.css'
import logo from '../../assets/Header-assets/logo.png';
const Logo = () => {
  return (
    <div className={style.logoBlock}>
      <a href="/" className={style.logo}>
      <img src={logo} alt="Лого" className={style.logoImage} width={60}/>
      <span className={style.logoText}>Arcane Tavern</span>
      </a>
    </div>
  );
};

export default Logo;