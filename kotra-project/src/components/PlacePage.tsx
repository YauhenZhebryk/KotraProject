import HeaderComponent from "./HeaderComponent"
import Footer from "./Footer"
import PlaceFullInformation from "./PlaceFullInformation"

type PlaceProps = {
	id : string
	name : string;
	info : string;
	img? : Array<string>;
}

function PlacePage ({id, name, info, img}: PlaceProps) {
  return (
	<div>
		<HeaderComponent />
		<PlaceFullInformation id={id} name={name} info={info} img={img} />
		<Footer />
	</div>
  )
}

export default PlacePage