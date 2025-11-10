import DottedLine from './DottedLine'
import ImageStack from './ImageStack';
import MainButton from './MainButton';
import SimpleImgSwapper from './SimpleImgSwapper';

interface PlaceShortInformationProps {
	side: string
	id: string
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
	
const ChevronSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-button-text"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    />
  </svg>
);

function PlaceShortInformation({ side, id, name, info, images = myImages, linkto }: PlaceShortInformationProps) {
	if (side === 'l'){
		return (
			<div className='my-16'>
				<DottedLine />
				<h2 id={id} className="text-4xl font-medium my-8 text-center">{name}</h2>
				<DottedLine />

				<div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mt-10">

					<div className="w-full lg:w-1/2 flex justify-center">
						<div className='block lg:hidden'>						
							<ImageStack images={images} width='300px' height='300px' rotation={5} scaleFactor={0.95}/>
						</div>
						<div className='hidden lg:block'>						
							<SimpleImgSwapper images={images} width='400px' height='400px' animationSpeed={0.5}/>
						</div>
					</div>

					<div className="w-full lg:w-1/2 order-2 lg:order-1 ">
						<p className="text-[20px] text-main-text mt-4 leading-7">{info}</p>
					</div>
				</div>
				<div>					 
					<MainButton linkto={linkto} text='Узнать больше' image={<ChevronSvg />} />
				</div>
			</div>
			)				
	}
	else {
		return (
			<div className='my-16'>
				<DottedLine />
				<h2 id={id} className="text-4xl font-medium my-8 text-center">{name}</h2>
				<DottedLine />
			
				<div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mt-10">
					<div className="w-full lg:w-1/2">
						<p className="text-[20px] text-main-text mt-4 leading-7">{info}</p>
					</div>
			
					<div className="w-full lg:w-1/2 flex justify-center">
						<div className='block lg:hidden'>						
							<ImageStack images={images} width='300px' height='300px' rotation={5} scaleFactor={0.95}/>
						</div>
						<div className='hidden lg:block order-2 lg:order-1'>						
							<SimpleImgSwapper images={images} width='400px' height='400px' animationSpeed={0.5}/>
						</div>
					</div>					
				</div>
				<div>
					<MainButton linkto={linkto} text='Узнать больше' image={<ChevronSvg />} />
				</div>
			</div>
		)
	}
}

export default PlaceShortInformation