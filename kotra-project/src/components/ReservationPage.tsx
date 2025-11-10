import HeaderComponent from "./HeaderComponent";
import InputComponent from "./InputComponent";
import MainButton from "./MainButton";
import Footer from "./Footer";
import { useEffect } from "react";

function ReservationPage() {
	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <HeaderComponent />
            <div className='w-full pl-5 pr-5 lg:px-30 lg:my-16 xl:px-40'>
                <h1 className="text-center text-4xl mt-3 mb-6">Бронирование</h1>

                <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">

                    <div className="relative w-full bg-footer-bg rounded-xl p-3 lg:p-6 lg:col-start-2 lg:row-start-1 lg:flex lg:items-center lg:text-center pt-6">
                        <p className="text-[20px] text-main-text leading-7 ">
                            После того как Вы заполните и отправите форму бронирования, мы обязательно свяжемся с вами по телефону для уточнения всех деталей.
                        </p>
                        <span className="absolute right-3 top-0 transform translate-x-1/3 -translate-y-1/3 w-9 h-9 flex items-center justify-center bg-main-orange text-button-text rounded-full text-[20px] font-medium">
                            ?
                        </span>
                    </div>

                    <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-1">
                        <InputComponent text="Имя" />
                        <InputComponent text="Телефон" />
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <InputComponent text="Описание заявки" type="area" />
                        <div className="mt-4">
                            <MainButton text="Отправить" type="submit" />
                        </div>
                    </div>
                </form>

            </div>
            <Footer />
        </>
    )
}

export default ReservationPage
