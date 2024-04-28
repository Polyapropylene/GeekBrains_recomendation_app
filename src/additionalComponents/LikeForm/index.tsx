

export type LikeFormProps = {
	onYesClick?(): void;
	onNoClick?():void;
};

export const LikeForm = ({onYesClick, onNoClick}: LikeFormProps) => {
	return (<div>
		<span>Вам подходит данный курс?</span>
		<button onClick={onYesClick}>Да, спасибо!</button>
		<button onClick={onNoClick}>Нет</button>
	</div>);
}