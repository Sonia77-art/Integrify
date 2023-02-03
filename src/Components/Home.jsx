import { Nav } from "./Nav.jsx";
import { CountriesCard } from "./CountriesCard.jsx";
import { useState } from "react";
import "../App.css";

export function Home() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="Home">
      <Nav onClick={setSearchText} />
      <CountriesCard searchText={searchText} />
    </div>
  );
}
