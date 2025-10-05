import HeaderComponent from './HeaderComponent'
import PlaceShortInformation from './PlaceShortInformation'
import img1 from '../assets/images/IMG_8163 1.png'
import img2 from '../assets/images/IMG_9407 1.png'
import img3 from '../assets/images/IMG_9532 2.png'


function HomePage() {
	return (
		<>
			<HeaderComponent />
			<div className='w-full pl-5 pr-5'>
			<PlaceShortInformation
				name="Гостевой дом"
				info="Идеально подходит для проведения свадебных торжеств, дней рождений, юбилеев, корпоративов, тимбилдингов и других мероприятий любого формата. Спальный дом вашей мечты, расположенный в живописной усадьбе, станет оазисом спокойствия и комфорта для вас и ваших гостей. Здесь каждая деталь продумана для максимального расслабления и восстановления сил. Просторные комнаты и уютные уголки позволяют комфортно разместить до 13 человек, обеспечивая каждому достаточно места для отдыха и общения."
				images={[
					{ id: 1, src: img1},
					{ id: 2, src: img2},
					{ id: 3, src: img3}
				]}
				linkto="/"
			/>
			</div>
		</>
	)
}

export default HomePage