import { Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import HomePage from "./components/HomePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
