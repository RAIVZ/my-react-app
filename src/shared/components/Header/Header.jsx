import React from 'react'
import style from './header.module.css'
import Logo from './logo';
import Menu from './menu'
import Profil from './profil'

const Header = () => {
    return (
    <header className={style.header}>
        <Logo />
        <Menu />
        <Profil />
    </header>
    );
}
export default Header;