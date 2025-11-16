import Header from "./Header"
import Footer from "./Footer"
import FullPlaceInfo from "./FullPlaceInfo"
import { useEffect } from "react";

type PlaceProps = {
	id : string
	name : string;
	info : string;
	images? : string[];
}

function FullPlaceInfoPage ({id, name, info, images = []}: PlaceProps) {
	useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
  return (
	<div>
		<Header />
		<div className="lg:px-30 xl:px-40">
			<FullPlaceInfo id={id} name={name} info={info } images={images} />
		</div>
		<Footer />
	</div>
  )
}

export default FullPlaceInfoPage