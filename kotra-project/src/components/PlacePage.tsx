import HeaderComponent from "./HeaderComponent"
import Footer from "./Footer"
import PlaceFullInformation from "./PlaceFullInformation"

type PlaceProps = {
	name : string;
	info : string;
	img? : Array<string>;
}

function PlacePage ({name, info, img}: PlaceProps) {
  return (
	<div>
		<HeaderComponent />
		<PlaceFullInformation name={name} info={info} img={img} />
		<Footer />
	</div>
  )
}

export default PlacePage