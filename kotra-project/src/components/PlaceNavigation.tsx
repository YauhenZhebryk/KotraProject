import PlaceCard from './PlaceCard'

import HouseNav from '../assets/images/main_house.png'
import BanyaNav from '../assets/images/sauna.png'
import ZalNav from '../assets/images/banketnyi_zal.png'
import TerritoryaNav from '../assets/images/sauna.png'

import { useNavigate } from 'react-router-dom'


function PlaceNavigation() {
    const navigate = useNavigate()
    return (
        <div className='my-5'>

            <button
                type="button"
                onClick={() => navigate('/guest_house')} 
                className="p-0 m-0 bg-transparent border-0 w-full text-left appearance-none"
            >
                <PlaceCard text="Гостевой дом" img={HouseNav} choice='l'/>
            </button>

            <button
                type="button"
                onClick={() => navigate('/bath_house')}
                className="p-0 m-0 bg-transparent border-0 w-full text-left appearance-none"
            >
                <PlaceCard text="Банный комплекс" img={BanyaNav} choice='r'/>
            </button>

            <button
                type="button"
                onClick={() => navigate('/banquet_hall')}
                className="p-0 m-0 bg-transparent border-0 w-full text-left appearance-none"
            >
                <PlaceCard text="Банкетный зал" img={ZalNav} choice='l'/>
            </button>

            <button
                type="button"
                onClick={() => navigate('/territory')}
                className="p-0 m-0 bg-transparent border-0 w-full text-left appearance-none"
            >
                <PlaceCard text="Территория" img={TerritoryaNav} choice='r'/>
            </button>

        </div>
    )
}

export default PlaceNavigation