import "./CountriesCard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CountriesCard(props) {
  const [more, setMore] = useState(true);
  const handleMoreClick = () => {
    setMore(false);
  };

  const handleLessClick = () => {
    setMore(true);
  };

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const visibleList = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(props.searchText);
  });

  const topList = more ? visibleList && visibleList.slice(0, 5) : visibleList;

  return (
    <>
      <table className="CountriesCard">
        <tr id="nothover">
          <th>Flag</th>
          <th>Name</th>
          <th>Regions</th>
          <th>Population</th>
          <th>Languages</th>
        </tr>
        {countries &&
          topList.map(({ id, flags, name, region, population, languages }) => {
            return (
              <tr key={id}>
                <td>
                  <img src={flags.png} alt={flags.alt} width="70" height="40" />
                </td>
                <td>{name.common}</td>
                <td>{region}</td>
                <td>{population}</td>
                <td>
                  <ul>
                    {languages &&
                      Object.values(languages).map((language) => (
                        <li>{language}</li>
                      ))}
                  </ul>
                </td>
                <Link to={`/name/${name.common}`}>
                  <td>&gt;</td>
                </Link>
              </tr>
            );
          })}
      </table>
      {more && (
        <div id="more">
          <p onClick={handleMoreClick}>+</p>
        </div>
      )}
      {!more && (
        <div id="more">
          <p onClick={handleLessClick}>-</p>
        </div>
      )}
    </>
  );
}
