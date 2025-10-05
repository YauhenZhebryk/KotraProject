import { Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import HomePage from "./components/HomePage";
import ReservationPage from "./components/ReservationPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
				<Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </>
  )
}

export default App
