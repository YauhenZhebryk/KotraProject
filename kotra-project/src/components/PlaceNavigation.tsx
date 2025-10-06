import PlaceCard from './PlaceCard'

import HouseNav from '../assets/images/main_house.png'
import BanyaNav from '../assets/images/sauna.png'
import ZalNav from '../assets/images/banketnyi_zal.png'
import TerritoryaNav from '../assets/images/sauna.png'



function PlaceNavigation() {
  return (
	<>
		<PlaceCard text="Гостевой дом" img={HouseNav} choice='l'/>
		<PlaceCard text="Банный комплекс" img={BanyaNav} choice='r'/>
		<PlaceCard text="Банкетный зал" img={ZalNav} choice='l'/>
		<PlaceCard text="Территория" img={TerritoryaNav} choice='r'/>
	</>
  )
}

export default PlaceNavigation