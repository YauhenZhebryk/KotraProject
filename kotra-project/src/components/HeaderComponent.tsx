import kotraLogo from '../assets/images/kotraBlackLogo.png'
import { Link, NavLink } from 'react-router-dom'

function HeaderComponent() {
	return (
		<>
			<header className='sticky top-0 z-50 w-full flex flex-col items-center bg-main-bg '>
				<Link to="/">
					<img src={kotraLogo} alt="" className='h-32 m-auto mt-2' />
				</Link>
				<nav className='w-full border-0 border-b-2 border-t-2 border-main-text p-4 pl-5 pr-5' >
					<ul className='w-full flex flex-row justify-between text-main-text flex-wrap font-medium text-base'>
						<li className='hover:text-main-orange transition-all'>
							<NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''} end>Главная</NavLink>
						</li>
						<li className='hover:text-main-orange transition-all'>
							<NavLink to="/reservation" className={({ isActive }) => isActive ? 'underline' : ''} end>Бронирование</NavLink>
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

		</>
	)
}

export default HeaderComponent