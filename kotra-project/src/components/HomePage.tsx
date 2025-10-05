import React from 'react'
import HeaderComponent from './HeaderComponent'
import LearnMoreButton from './LearnMoreButton'

function HomePage() {
	return (
		<>
			<HeaderComponent />
			<div className='w-full pl-5 pr-5'>

				<LearnMoreButton></LearnMoreButton>
			</div>
		</>
	)
}

export default HomePage