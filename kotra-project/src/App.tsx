import './App.css'
import './index.css'
import ButtonOrange from './components/ButtonOrange';
import Stack from './components/Stack';
import img1 from './assets/images/IMG_8163 1.png';
import img2 from './assets/images/IMG_9407 1.png';
import img3 from './assets/images/IMG_9532 2.png';
import SimpleImgSwapper from './components/SimpleImgSwapper';
import FormReservation from './components/FormResevation';


function App() {
	const images : { id: number; img: string }[] = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];
  return (
    <>
			<div className='text-center mt-6 text-2x'>Clear project Vite + React + TypeScript + Vitest + TailwindCSS + ESlint + Prettier + pnpm</div>
			<ButtonOrange />
			
			<div className='flex justify-center'>
			<Stack
				randomRotation={false}
				sensitivity={180}
				sendToBackOnClick={false}
				cardDimensions={{ width: 200, height: 200 }}
				cardsData={images}
			/>
			</div>
							<SimpleImgSwapper
								width={600}
								height={350}
								animationSpeed={0.3}
								images={[
									{ src: img1, alt: 'IMG_8163' },
									{ src: img2, alt: 'IMG_9407' },
									{ src: img3, alt: 'IMG_9532' },
									{ src: img1, alt: 'IMG_8163' },
									{ src: img2, alt: 'IMG_9407' },
									{ src: img3, alt: 'IMG_9532' },
								]}
							/>

			<div className="min-h-screen flex items-center justify-center bg-main-bg text-main-text bg-main-orange">
      <FormReservation
        botToken="8026210892:AAF6z8RLg907SflGFk6PkldPa54ZUnxxRRc"
        chatId="-1003020709281" 
      />
    </div>
		
    </>
  )
}

export default App
