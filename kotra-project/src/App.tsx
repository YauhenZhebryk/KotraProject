import { Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import HomePage from "./components/HomePage";
import ReservationPage from "./components/ReservationPage";
import ReviewPage from "./components/ReviewPage";
import PlacePage from "./components/PlacePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
				<Route path="/reservation" element={<ReservationPage />} />
				<Route path="/review" element={<ReviewPage />} />
				<Route path="/guest_house" element={<PlacePage id="" name="Гостевой дом" info="ЛАЛАЛА" />} />
				{/* <Route path="/bath_house" element={<Bath_house />} />
				<Route path="/banquet_hall" element={<Banquet_hall />} />
				<Route path="/territory" element={<Territory />} /> */}
      </Routes>
    </>
  )
}

export default App
