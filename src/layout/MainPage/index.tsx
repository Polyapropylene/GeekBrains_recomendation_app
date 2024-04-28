import * as React from "react";
import "./styles.css";
import { CourseCard } from "../../additionalComponents/CourseCard";

enum Categories {
	ALL = 'Все направления',
	IT = 'ИТ',
	DEVELOPMENT = 'Программирование',
	DESIGN = 'Дизайн',
	MARKETING = 'Маркетинг',
	ANALYTICS = 'Аналитика',
	ML = 'Машинное обучение',
	TESTING = 'Тестирование',
	BLOCKCHAIN = 'Blockchain',
}

export const MainPage = () => {
	const [data, setData] = React.useState([]);
	const lend = require('../../assets/lend.svg').default;
	const lens = require('../../assets/lens.svg').default;


	const formData = new FormData();

	const onLinkClick = () => {
		window.location.href = 'https://t.me/gb_course_search_bot';
	}

	// const filterForm = (<div className="formContainer">
	// 	<h4>Хотите получить вакансию мечты?</h4>
	// 	<h6>Прокачайте скиллы!</h6>
	// 	<span>Опишите вакансию или вставьте ссылку на hh.ru</span>
	// 	<textarea placeholder="Искусственный интеллект, разработка игр"/>
	// 	<button>Подобрать курсы</button>
	// 	<a>или</a>
	// 	<a>Напишите нашему <span onClick={onLinkClick}>боту</span></a>
	// </div>);

	return (<>
	<div className="navgation">
		<span className="disabledText">Главная</span>
		<span className="activePage">Программы обучения</span>
	</div>
	<img src={lend} alt="open door to your future" className="girlPicture"/>
	<div className="coursesContainer">
		<h1>Курсы по всем направлениям</h1>
		<div className="categories">
			{}
		</div>
		<div className="search">
			<input className="searchInput" readOnly placeholder="Введите название программы"/>
		</div>
		{/* {data.map((course) => (<CourseCard title={course.title} salary={course.salary} description={course.decription/>))} */}
	<CourseCard title="Специалист по внедрению Искусственного Интеллекта" description="Лёгкий путь в Machine Learning и Data Science. Начни внедрять Искусственный Интеллект без кода и математики и зарабатывай уже во время обучения! "/>
	</div>
</>);
}