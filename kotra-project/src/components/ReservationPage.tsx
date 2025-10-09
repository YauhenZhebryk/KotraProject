import HeaderComponent from "./HeaderComponent";
import InputComponent from "./InputComponent";

function ReservationPage() {
	return (
		<>
			<HeaderComponent />
			<div className='w-full pl-5 pr-5'>
				<h1 className="text-center text-4xl mt-3 mb-6">Бронирование</h1>
				<div className="relative w-full p-3 leading-5 bg-footer-bg rounded-xl after:text-button-text after:content-['?'] after:bg-main-orange after:rounded-full after:absolute after:right-0 after:top-0 after:size-9 after:flex after:justify-center after:items-center after:text-[20px]after:font-medium after:-translate-y-1/3 after:translate-x-1/3"><p>После того как Вы заполните и отправите форму бронирования, мы обязательно свяжемся с вами по телефону для уточнения всех деталей.</p></div>
				
				<form action="" className="flex gap-5 flex-col">
				<InputComponent text="Имя"/>
				<InputComponent text="Имя"/>
				</form>
			</div>
		</>
	)
}

export default ReservationPage	
