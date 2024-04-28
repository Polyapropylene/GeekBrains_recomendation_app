import * as React from "react";
import "./styles.css";

export const Details = () => {
  return (
    <div>
      <div className="navigation">
        <div>
          <span className="disabledText">Главная &gt; </span>
          <span className="disabledText">Программы обучения &gt;</span>
          <span className="activePage">О курсе</span>
        </div>
		<span className="blueText">Вернуться к подбору</span>
      </div>
          <div className="mainContainer"></div>
    </div>
  );
};
