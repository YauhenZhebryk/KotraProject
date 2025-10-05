import kotraLogo from '../assets/images/cortraBlackLogo.png'
import { Link } from 'react-router-dom'

function HeaderComponent() {
	return (
		<>
			<header className='fixed top-0 left-0 right-0 z-50 w-full flex flex-col items-center bg-main-bg'>
				<Link to="/">
					<img src={kotraLogo} alt="" className='h-32 m-auto mt-8' />
				</Link>
				<nav className='w-full border-0 border-b-2 border-t-2 border-main-text p-4' >
					<ul className='w-full flex flex-row justify-between text-main-text flex-wrap font-medium text-base'>
						<li className='hover:text-main-orange transition-all'>
							<Link to="/">Главная</Link>
						</li>
						<li className='hover:text-main-orange transition-all'>
							<Link to="/">Бронирование</Link>
						</li>
						<li className='hover:text-main-orange transition-all'>
							<Link to="/">Отзывы</Link>
						</li>
						<li className='hover:text-main-orange transition-all'>
							<Link to="/">Контакт</Link>
						</li>
					</ul>
				</nav>
			</header>

			<div className='h-40' aria-hidden='true' />
		</>
	)
}

export default HeaderComponent