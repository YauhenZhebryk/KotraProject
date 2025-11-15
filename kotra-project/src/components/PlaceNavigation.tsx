import PlaceCard from './PlaceCard'

import HouseNav from '../assets/images/mainPhotos/housewebp/main_house.webp'
import BanyaNav from '../assets/images/mainPhotos/banyawebp/sauna.webp'
import ZalNav from '../assets/images/mainPhotos/hall/banketnyi_zal.png'
import TerritoryaNav from '../assets/images/mainPhotos/territorywebp/territory_10.webp'

import { useNavigate } from 'react-router-dom'


function PlaceNavigation() {
    const navigate = useNavigate()
    return (
        <div className='my-5'>

            <a href='#house' className="p-0 m-0 bg-transparent border-0 w-full text-left appearance-none"
            >
                <PlaceCard text="Гостевой дом" img={HouseNav} choice='l'/>
            </a>

            <a href='#bath' className="p-0 m-0 bg-transparent border-0 w-full text-left appearance-none"
            >
                <PlaceCard text="Банный комплекс" img={BanyaNav} choice='r'/>
            </a>

            <a href='#hall' className="p-0 m-0 bg-transparent border-0 w-full text-left appearance-none"
            >
                <PlaceCard text="Банкетный зал" img={ZalNav} choice='l'/>
            </a>

            <a href='#territory' className="p-0 m-0 bg-transparent border-0 w-full text-left appearance-none"
            >
                <PlaceCard text="Территория" img={TerritoryaNav} choice='r'/>
            </a>

        </div>
    )
}

export default PlaceNavigation