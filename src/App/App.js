import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from "./Footer/Footer";


function App() {

  const appVersion = '0.2.321';
  const menu = ['About', 'Products', 'Price'];
  const list = ['a', 'b', 'c'];

  return (
    <div className="App">
      <Header v={appVersion} menu={menu} list={list}/>
      <img src={logo}
           alt="logo"

      />
      <h1> Hello </h1>
      <Footer version={appVersion} menu={menu} />
    </div>
  );
}

export default App;
