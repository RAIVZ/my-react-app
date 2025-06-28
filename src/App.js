import React from 'react';

import './App.css';

const App = () => {                                  
  return (                                       
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>                                      
  );                                        
}    

// Вот где вы описываете содержимое
const Header = () => (
  <header>
    <ul>
      <li>Пункт 1</li>
      <li>Пункт 2</li>
    </ul>
  </header>
);

const Main = () => (
  <main>
    <h1>Добро пожаловать!</h1>
    <p>Здесь ваш основной контент.</p>
  </main>
);


export default App; 