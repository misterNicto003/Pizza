import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />

              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

              <PizzaBlock title="Неаполитанская пицца " price={550}/>
              <PizzaBlock title="Кальцоне " price={500}/>
              <PizzaBlock title="Римская пицца" price={450}/>
              <PizzaBlock title="Пицца в нарезке " price={450}/>
              <PizzaBlock title="Сицилийская пицца" price={500}/>
              <PizzaBlock title="Жареная пицца" price={700}/>
              <PizzaBlock title="Пицца в сковороде" price={600}/>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
