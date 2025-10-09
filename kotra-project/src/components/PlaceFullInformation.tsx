import DottedLine from './DottedLine'
import Masonry from './Masonry'

interface PlaceFullInformationProps {
	name: string
	info: string
	img?: Array<string>
}


function PlaceFullInformation({ name, info}: PlaceFullInformationProps) {

	return (
		<div className='my-8'>
			<DottedLine />
			<h2 className="text-4xl font-medium my-8 text-center">{name}</h2>
			<DottedLine />
			<div className="flex justify-center items-center mt-10">
				<Masonry items={[]} />
			</div>
			<p className="text-[20px] text-main-text mt-4 leading-7">{info}</p>
		</div>
	)
}

export default PlaceFullInformation