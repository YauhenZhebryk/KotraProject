import DottedLine from './DottedLine'

interface PlaceFullInformationProps {
	id : string
	name: string
	info: string
	img?: Array<string>
}


function PlaceFullInformation({ id, name, info}: PlaceFullInformationProps) {

	return (
		<div className='my-8'>
			<DottedLine />
			<h2 id={id} className="text-4xl font-medium my-8 text-center">{name}</h2>
			<DottedLine />
			<div className="flex justify-center items-center mt-10">
			</div>
			<p className="text-[20px] text-main-text mt-4 leading-7">{info}</p>
		</div>
	)
}

export default PlaceFullInformation