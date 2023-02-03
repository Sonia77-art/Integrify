import "./App.css";
import { Home } from "./Components/Home.jsx";
import { Country } from "./Components/Country.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/name/:name" element={<Country />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
