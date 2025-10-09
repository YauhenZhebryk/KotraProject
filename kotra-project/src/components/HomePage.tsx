
import PlaceNavigation from './PlaceNavigation'


import HeaderComponent from './HeaderComponent'
import AllPlacesMainPage from './AllPlacesMainPage'
import CommentSection from './CommentSection'
import Footer from './Footer'


function HomePage() {
	return (
		<>
			<HeaderComponent />
			<div className='w-full pl-5 pr-5'>
				<PlaceNavigation />
				<AllPlacesMainPage />
				<CommentSection />
			</div>
			<Footer />
		</>
	)
}

export default HomePage