import * as React from "react";
import "./styles.css";

export const Header = () => {
  const menu = require('../../assets/menu.svg').default;
  const logo = require('../../assets/logo.svg').default;
  const bell = require('../../assets/bell.svg').default;
  return (
    <>
      <div className="headerContainer">
        {/* Note: Сейчас все здесь - это загулшки, при масштабировании здесь будут работающие кнопки */}
        <div className="leftContent">
          <img src={menu} alt='menu' />
          <img src={logo} alt='logo' />
          <span className="disabled">Программы</span>
          <span className="disabled">Мероприятия</span>
          <span className="disabled">Журнал</span>
        </div>
        <div className="rightContent">
          <div className="rightButtons">
            <span className="button"><img src={bell} alt='bell'/></span>
            <span className="button">Войти</span>
            <span className="button">Регистрация</span>
          </div>
		  <span className="blueText">Подобрать обучение</span>
        </div>
      </div>
      <hr />
    </>
  );
};
