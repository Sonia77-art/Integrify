import { useState } from "react";
import "./Nav.css";

export function Nav({ onClick }) {
  const [searchText, setSearchText] = useState("");
  const handleClick = (event) => {
    onClick(searchText);
  };
  return (
    <div className="Nav">
      <div className="Left">
        <p className="P1">|||</p>
        <p>Country</p>
      </div>
      <div className="Search">
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value.toLowerCase())}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}
