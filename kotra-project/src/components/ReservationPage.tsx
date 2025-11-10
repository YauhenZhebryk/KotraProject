import HeaderComponent from "./HeaderComponent";
import Footer from "./Footer";
import { useEffect } from "react";
import ReservationForm from "./ReservationForm";

function ReservationPage() {
	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <HeaderComponent />
            <ReservationForm/>
            <Footer />
        </>
    )
}

export default ReservationPage
