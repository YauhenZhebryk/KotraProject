import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import ReservationForm from "./ReservationForm";

function ReservationPage() {
	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <div className="px-4 lg:max-w-6xl m-auto lg:px-5">
				<ReservationForm/>
			</div>
            <Footer />
        </>
    )
}

export default ReservationPage
