import * as React from "react";
import "./styles.css";
import { CourseCard } from "../../additionalComponents/CourseCard";

export const MainPage = () => {
  const [data, setData] = React.useState([]);
  const lend = require("../../assets/lend.svg").default;
  const lens = require("../../assets/lens.svg").default;

  const formData = new FormData();

  const onLinkClick = () => {
    window.location.href = "https://t.me/gb_course_search_bot";
  };

  const filterForm = (
    <div className="formContainer">
      <div className="column">
        <span className="question">Хотите получить вакансию мечты?</span>
        <span className="skills">Прокачайте скиллы!</span>
        <span>Опишите вакансию или вставьте ссылку на hh.ru</span>
      </div>
      <textarea placeholder="Искусственный интеллект, разработка игр" />
      <button className="primaryButton">Подобрать курсы</button>
      <a className="greyText">или</a>
      <a className="greyText">
        Напишите нашему{" "}
        <span className="link" onClick={onLinkClick}>
          боту
        </span>
      </a>
    </div>
  );

  return (
    <>
      <div className="navgation">
        <span className="disabledText">Главная &gt; </span>
        <span className="activePage">Программы обучения</span>
      </div>
      <img src={lend} alt="open door to your future" className="girlPicture" />
      <div className="coursesContainer">
        <h1>Курсы по всем направлениям</h1>
        <div className="search">
          <input
            className="searchInput"
            readOnly
            placeholder="Введите название программы"
          />
        </div>
        <div className="row">
          <div className="coursesTiles">
            <CourseCard
              title="Специалист по внедрению Искусственного Интеллекта"
              description="Лёгкий путь в Machine Learning и Data Science. Начни внедрять Искусственный Интеллект без кода и математики и зарабатывай уже во время обучения! "
            />
          </div>
          {filterForm}
        </div>
      </div>
    </>
  );
};
