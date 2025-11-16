import MainButton from "./MainButton"
import Comment from "./Comment"

const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
);


function CommentsSection() {
	return (
		<div className="my-16 lg:my-72 space-y-10">
			<div className="flex gap-2.5 flex-col lg:flex-row">
				<Comment name="Николай" rate={5} text='Отличное место для отдыха! Тихая природа, уютный дом и шикарная баня. Провели здесь выходные — перезагрузились на 100%. Обязательно вернёмся!' data='14.06.2024'></Comment>
				<Comment name="Виктория" rate={5} text='Приезжали компанией — всем очень понравилось. Территория ухоженная, вокруг лес и свежий воздух. Рекомендуем!' data='14.06.2024'></Comment>
				<Comment name="Kirill" rate={5} text='Усадьба выше всех ожиданий: чисто, красиво и очень атмосферно.' data='14.06.2024'></Comment>
			</div>
			<div>
				<MainButton linkto='/review' text='Оставить отзыв' image={<Svg />} />
			</div>
		</div>
	)
}

export default CommentsSection