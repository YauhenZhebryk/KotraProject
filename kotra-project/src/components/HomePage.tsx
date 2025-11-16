
import PlacesCardNavigation from './PlacesCardNavigation'
import Header from './Header'
import AllShortPlacesInfoMainPage from './AllShortPlacesInfo'
import CommentsSection from './CommentsSection'
import Footer from './Footer'
import Preview from './Preview'

function HomePage() {
	return (
		<>
			<Header />
			<div className='px-4 lg:max-w-6xl m-auto lg:px-5'>
				<div className='w-full'>
					<div className='hidden lg:block my-8'>
						<Preview />
					</div>
					<div className='block lg:hidden'>
						<PlacesCardNavigation />
					</div>
					<AllShortPlacesInfoMainPage />
					<CommentsSection />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default HomePage