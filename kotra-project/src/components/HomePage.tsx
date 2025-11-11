
import PlaceNavigation from './PlaceNavigation'
import HeaderComponent from './HeaderComponent'
import AllPlacesMainPage from './PlacesReviewPhone'
import CommentSection from './CommentSection'
import Footer from './Footer'
import Preview from './Preview'

function HomePage() {
	return (
		<>
			<HeaderComponent />
			<div className='px-4 lg:max-w-6xl m-auto lg:px-5'>
				<div className='w-full'>
					<div className='hidden lg:block my-8'>
						<Preview />
					</div>
					<div className='block lg:hidden'>
						<PlaceNavigation />
					</div>
					<AllPlacesMainPage />
					<CommentSection />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default HomePage