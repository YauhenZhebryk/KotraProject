import { useEffect, useState } from "react";
import { getInitialTheme } from '../utils/theme';
import InstaLogo from "../assets/images/footerSVG/insta.svg"
import InstaLogoDark from "../assets/images/footerSVG/insta_darkmod.svg"
import PhoneLogo from "../assets/images/footerSVG/phone.svg"
import PhoneLogoDark from "../assets/images/footerSVG/phone_darkmod.svg"
import GeoLogo from "../assets/images/footerSVG/geo.svg"
import GeoLogoDark from "../assets/images/footerSVG/geo _darkmod.svg"




function Footer() {
		const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'class') {
					setIsDark(document.documentElement.classList.contains('dark'));
				}
			});
		});

		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
		return () => observer.disconnect();
	}, []);

	return (
		<div className="bg-footer-bg text-main-text">
			<div className="p-5 pb-16 lg:pb-5 space-y-4 mt-10 text-xl lg:max-w-6xl m-auto lg:px-5">

				<h2 className="text-footer-text">Контакты</h2>

				<address>

					<ul className="space-y-2 not-italic">

						<li className="flex items-center gap-2 lg:hover:text-main-orange">
							<img src={isDark ? InstaLogoDark : InstaLogo} alt="Instagram" className="w-10 h-10" />
							<a href="https://instagram.com/usadba_kotra" target="_blank" rel="noopener noreferrer">
							@usadba_kotra
							</a>
						</li>

						<li className="flex items-center gap-2 lg:hover:text-main-orange">
							<img src={isDark ? PhoneLogoDark : PhoneLogo} alt="Телефон" className="w-10 h-10" />
							<a href="tel:+375292718888">+375 (29) 271 88 88</a>
						</li>

						<li className="flex items-center gap-2 lg:hover:text-main-orange">
							<img src={isDark ? GeoLogoDark : GeoLogo} alt="Адрес" className="w-10 h-10" />
							<a href="https://www.google.com/maps/place/%D0%A3%D1%81%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0+%D0%9A%D0%BE%D1%82%D1%80%D0%B0/@53.5977164,24.1887857,20.25z/data=!4m14!1m7!3m6!1s0x46dfcffe0beea665:0xb841cb550193f0b9!2z0KPRgdCw0LTRjNCx0LAg0JrQvtGC0YDQsA!8m2!3d53.5975719!4d24.1889852!16s%2Fg%2F11qqmhfs84!3m5!1s0x46dfcffe0beea665:0xb841cb550193f0b9!8m2!3d53.5975719!4d24.1889852!16s%2Fg%2F11qqmhfs84?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" 
							target="blank" rel="noopener noreferrer">
							Гродненский район, деревня Гущицы, Ул. Центральная 31а
							</a>
						</li>

					</ul>
				</address>
			</div>
		</div>
  )
}

export default Footer