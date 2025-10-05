import DottedLine from './DottedLine'
import ImageStack from './ImageStack';
import { Link } from 'react-router-dom';
import LearnMoreButton from './LearnMoreButton';

interface PlaceShortInformationProps {
	name: string
	info: string
	linkto: string
	images: Array<{
		id: number;
		src: string;
	}>
}

 const myImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2134&auto=format&fit=crop'},
    { id: 2, src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2487&auto=format&fit=crop'},
    { id: 3, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2487&auto=format&fit=crop'},
    { id: 4, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2487&auto=format&fit=crop'},
  ];


function PlaceShortInformation({ name, info, images = myImages, linkto }: PlaceShortInformationProps) {
	return (
		<>
			<DottedLine />
			<h2 className="text-4xl font-medium my-8 text-center">{name}</h2>
			<DottedLine />
			<div className="flex justify-center items-center mt-10">
				<ImageStack images={images} width='300px' height='300px' rotation={5} scaleFactor={0.95}/>
			</div>
			<p className="text-[20px] text-main-text mt-4">{info}</p>
			
			<Link to={linkto}>
				<div  className='mt-4 w-full flex justify-end'>
					<LearnMoreButton />
				</div>
			</Link>
		</>
	)
}

export default PlaceShortInformation