import * as React from 'react';
import './styles.css';

export type CourseCardProps = {
	title?: string;
	salary?: string;
	description?: string;
	onLinkClick?(): void;
};

export const CourseCard = ({title, salary, description, onLinkClick}: CourseCardProps) => {
	const fire = require('../../assets/fire.svg').default;
	return (
	<div className='card'>
		<div className='upperRow'>
			<span className='courseType'>Профильный курс</span>
			<span className='salary'>от {salary !== undefined ? salary : '20 000'} руб</span>
		</div>
		<div className='mainText'>
			<span className="title">{title}</span>
			<span className="description">{description}</span>
		</div>
		<div className='footer'>
			<div className='leftSide'>
				<span className="longevity">Срок обучения: 6 месяцев</span>
				<span className='orangeText'> <img  src={fire} alt='fire' />Главный тренд года</span>
			</div>
			<span className='link' onClick={onLinkClick}>Подробнее</span>
		</div>
	</div>)
};