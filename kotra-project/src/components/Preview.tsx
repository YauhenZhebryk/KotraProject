import HouseNav from '../assets/images/mainPhotos/housewebp/main_house.webp'
import BanyaNav from '../assets/images/mainPhotos/banyawebp/sauna.webp'
import ZalNav from '../assets/images/mainPhotos/hall/banketnyi_zal.png'
import TerritoryaNav from '../assets/images/mainPhotos/territorywebp/territory_10.webp'

import Lighter from "./Lighter";


function Preview() {
  return (
 		<div className="flex gap-8">
   			<div className="flex-col space-y-20 py-16">
     			<div className="text-main-text text-4xl">
       				Агроусадьба «<span className="text-main-orange">Котра</span>» приглашает вас!
      			</div>
      			<div className="text-main-text text-xl">
							<Lighter position="top-[150px] left-16" size="440"/>
        			Агроусадьба располагается в живописном уголке Гродненского района, всего в 25 км от Гродно, приглашает вас провести незабываемое корпоративное мероприятие в атмосфере уюта и гармонии с природой.
      			</div>
    		</div>

    		<div className="text-main-text flex-1 relative flex items-center justify-center">
				<div className="relative w-125 h-125 left-1/2 -translate-x-1/2">
					<a href="#house" className="absolute top-0 left-1/2 -translate-x-1/2">
						<div className="w-50 h-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
							<img src={HouseNav} title="Гостевой дом" alt="" className="w-full h-full rounded-full" />
						</div>
					</a>
					<a href="#bath" className="absolute top-1/2 right-0 -translate-y-1/2">
						<div className="w-50 h-50 rounded-full  flex items-center justify-center hover:scale-110 transition-transform">
							<img src={BanyaNav} title="Банный комплекс" alt="" className="w-full h-full rounded-full" />
						</div>
					</a>
					<a href="#hall" className="absolute bottom-0 left-1/2 -translate-x-1/2">
						<div className="w-50 h-50 rounded-full  flex items-center justify-center hover:scale-110 transition-transform">
							<img src={ZalNav} title="Банкетный зал" alt="" className="w-full h-full rounded-full" />
						</div>
					</a>
					<a href="#territory" className="absolute top-1/2 left-0 -translate-y-1/2">
						<div className="w-50 h-50 rounded-full  flex items-center justify-center hover:scale-110 transition-transform">
							<img src={TerritoryaNav} title="Территория" alt="" className="w-full h-full rounded-full" />
						</div>
					</a>
				</div>
    		</div>
  	</div>
  );
}

export default Preview;
