import { Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import HomePage from "./components/HomePage";
import ReservationPage from "./components/ReservationPage";
import ReviewPage from "./components/ReviewPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
				<Route path="/reservation" element={<ReservationPage />} />
				<Route path="/review" element={<ReviewPage />} />
      </Routes>
    </>
  )
}

export default App
