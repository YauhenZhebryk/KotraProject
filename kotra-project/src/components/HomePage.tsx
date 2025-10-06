
import PlaceNavigation from './PlaceNavigation'


import HeaderComponent from './HeaderComponent'
import AllPlacesMainPage from './AllPlacesMainPage'
import CommentSection from './CommentSection'


function HomePage() {
	return (
		<>
			<PlaceNavigation />
			<HeaderComponent />
			<div className='w-full pl-5 pr-5'>
				<AllPlacesMainPage />
				<CommentSection />
			</div>
		</>
	)
}

export default HomePage