import React from "react";
import Header from "../shared/components/Header/Header";
import Main from "../shared/components/Main/main";
import style from "./App.module.css";
const App = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
