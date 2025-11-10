import HeaderComponent from "./HeaderComponent";
import ReservationForm from "./ReservationForm";
import Footer from "./Footer";
import { useEffect } from "react";

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
