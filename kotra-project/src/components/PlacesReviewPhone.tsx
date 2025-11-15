import PlaceShortInformation from './PlaceShortInformation'

import house1 from '../assets/images/mainPhotos/housewebp/house_outside_7.webp' 
import house2 from '../assets/images/mainPhotos/housewebp/house_outside_3.webp' 
import house3 from '../assets/images/mainPhotos/housewebp/house_inside_first_floor_5.webp' 
import house4 from '../assets/images/mainPhotos/housewebp/house_inside_first_floor_8.webp' 

import banya1 from '../assets/images/mainPhotos/banyawebp/banya_outside_15.webp' 
import banya2 from '../assets/images/mainPhotos/banyawebp/banya_inside_9.webp' 
import banya3 from '../assets/images/mainPhotos/banyawebp/banya_inside_13.webp' 
import banya4 from '../assets/images/mainPhotos/banyawebp/banya_inside_12.webp' 

import hall1 from '../assets/images/mainPhotos/hallwebp/hall_1.webp' 
import hall2 from '../assets/images/mainPhotos/hallwebp/hall_2.webp' 
import hall3 from '../assets/images/mainPhotos/hallwebp/hall_8.webp' 
import hall4 from '../assets/images/mainPhotos/hallwebp/hall_4.webp' 

import territory1 from '../assets/images/mainPhotos/territorywebp/territory_6.webp' 
import territory2 from '../assets/images/mainPhotos/territorywebp/territory_15.webp' 
import territory3 from '../assets/images/mainPhotos/territorywebp/territory_11.webp' 
import territory4 from '../assets/images/mainPhotos/territorywebp/territory_1.webp' 



function AllPlacesMainPage() {
	return (
		<>
			<PlaceShortInformation
				side='l'
				id="house"
				name="Гостевой дом"
				info="Идеально подходит для проведения свадебных торжеств, дней рождений, юбилеев, корпоративов, тимбилдингов и других мероприятий любого формата. Спальный дом вашей мечты, расположенный в живописной усадьбе, станет оазисом спокойствия и комфорта для вас и ваших гостей. Здесь каждая деталь продумана для максимального расслабления и восстановления сил. Просторные комнаты и уютные уголки позволяют комфортно разместить до 13 человек, обеспечивая каждому достаточно места для отдыха и общения."
				images={[
					{ id: 1, src: house1},
					{ id: 2, src: house2},
					{ id: 3, src: house3},
					{ id: 4, src: house4}
				]}
				linkto="/guest_house"
			/>
			<PlaceShortInformation
				side='r'
				id="bath"
				name="Банный комплекс"
				info="Наслаждайтесь отдыхом в нашей русской бане на дровах, где каждый момент наполнен теплом и особой атмосферой. После бани вас ждёт освежающая купель, которая подарит лёгкость и бодрость, помогая восстановить силы и почувствовать гармонию с природой. Для продолжения отдыха предусмотрено уютное место для посиделок — здесь можно провести время с друзьями или семьёй, пообщаться в непринуждённой обстановке и насладиться спокойствием. Баня и зона отдыха станут идеальным завершением дня и подарят ощущение настоящего уюта и душевного комфорта."
				images={[
					{ id: 1, src: banya1},
					{ id: 2, src: banya2},
					{ id: 3, src: banya3},
					{ id: 4, src: banya4}
				]}
				linkto="/bath_house"
			/>
			<PlaceShortInformation
				side='l'
				id="hall"
				name="Банкетный зал"
				info="Просторный банкетный зал в формате крытого застеклённого шатра с кондиционированием вмещает до 70 гостей, обеспечивая комфорт для мероприятий любого масштаба. 
				Мы предлагаем комплексное обслуживание: организацию трансфера, завтраков, обедов и ужинов, а также профессиональное проведение банкетов с участием опытных шеф-поваров и внимательных официантов. Здесь каждая деталь продумана для того, чтобы ваше торжество прошло безупречно."
				images={[
					{ id: 1, src: hall1},
					{ id: 2, src: hall2},
					{ id: 3, src: hall3},
					{ id: 4, src: hall4}
				]}
				linkto="/banquet_hall"
			/>
			<PlaceShortInformation
				side='r'
				id="territory"
				name="Территория"
				info="Наша территория — это уютное пространство в окружении природы, где царит особая атмосфера красоты и гармонии. Здесь вас ждут тёплые и душевные посиделки под открытым небом, а живая игра огня создаёт неповторимый уют и располагает к дружеским разговорам и отдыху. Рядом находится оборудованная зона барбекю, где можно приготовить вкусные блюда на гриле и насладиться ими в кругу семьи или друзей. Красивое оформление и естественное окружение делают это место идеальным для отдыха и незабываемого времяпрепровождения."
				images={[
					{ id: 1, src: territory1},
					{ id: 2, src: territory2},
					{ id: 3, src: territory3},
					{ id: 4, src: territory4}
				]} 
				linkto="/territory"
			/>
		</>
	)
}

export default AllPlacesMainPage