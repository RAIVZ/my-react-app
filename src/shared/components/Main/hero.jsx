import React from "react";
import style from "./hero.module.css";
const hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <h1 class={style.h1}>Programmer’s Notebook</h1>
        <p className={style.desc}>
          Ваш цифровой помощник в изучении программирования
        </p>
      </div>
    </section>
  );
};
export default hero;
