import HeaderComponent from "./HeaderComponent"
import Footer from "./Footer"
import PlaceFullInformation from "./PlaceFullInformation"
import { useEffect } from "react";

type PlaceProps = {
	id : string
	name : string;
	info : string;
	img? : Array<string>;
}

function PlacePage ({id, name, info, img}: PlaceProps) {
	useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
  return (
	<div>
		<HeaderComponent />
		<div className="lg:px-30 xl:px-40">
			<PlaceFullInformation id={id} name={name} info={info } img={img} />
		</div>
		<Footer />
	</div>
  )
}

export default PlacePage