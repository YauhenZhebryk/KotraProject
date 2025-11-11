import kotraBlackLogo from '../assets/images/kotraBlackLogo.png'
import kotraWhiteLogo from '../assets/images/kotraWhiteLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import ThemeSwitcher from './ThemeSwitcher';


function HeaderComponent() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 w-full flex flex-col items-center bg-main-bg lg:flex-row lg:pl-20 lg:border-b-1 lg:border-main-text transition-transform duration-500
		ease-in-out ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img 
          src={isDark ? kotraWhiteLogo : kotraBlackLogo} 
          alt="" 
          className='h-32 m-auto mt-2 lg:w-80 lg:h-auto object-contain'
        />
      </Link>

      <nav className='w-full border-0 border-b-2 border-t-2 border-main-text p-4 pl-1 pr-1 lg:border-t-0 lg:border-b-0'>
        <ul className='w-full flex flex-row justify-between text-main-text flex-wrap font-medium text-base lg:justify-center lg:gap-x-15'>
          <li className='hover:text-main-orange transition-all'>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'underline underline-offset-4' : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Главная
            </NavLink>
          </li>
          <li className='hover:text-main-orange transition-all'>
            <NavLink to="/reservation" className={({ isActive }) => isActive ? 'underline underline-offset-4' : ''} end onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Бронирование
            </NavLink>
          </li>
          <li className='hover:text-main-orange transition-all'>
            <NavLink to="/review" className={({ isActive }) => isActive ? 'underline underline-offset-4' : ''}>
              Отзывы
            </NavLink>
          </li>
          <li className='hover:text-main-orange transition-all cursor-pointer' onClick={scrollToBottom}>
            Контакты
          </li>
        </ul>
      </nav>
			<ThemeSwitcher />
    </header>
  );
}

export default HeaderComponent;