import * as React from "react";
import "./styles.css";
import { Navigate, useNavigate } from "react-router-dom";

export const Details = () => {
	const navigate = useNavigate();
	const onLinkClick = () => {
		navigate("/home");
	}
  return (
    <div>
      <div className="navigation">
        <div>
          <span className="disabledText">Главная &gt; </span>
          <span className="disabledText">Программы обучения &gt; </span>
          <span className="activePage">О курсе</span>
        </div>
		<span className="blueText"  onClick={onLinkClick}>Вернуться к подбору</span>
      </div>
          <div className="mainContainer"></div>
    </div>
  );
};
