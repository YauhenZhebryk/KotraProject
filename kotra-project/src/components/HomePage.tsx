
import PlaceNavigation from './PlaceNavigation'
import HeaderComponent from './HeaderComponent'
import AllPlacesMainPage from './AllPlacesMainPage'
import CommentSection from './CommentSection'
import Footer from './Footer'
import Preview from './Preview'


function HomePage() {
	return (
		<>
			<HeaderComponent />
			<div className='lg:px-30 xl:px-40'>
				<div className='w-full px-2'>
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