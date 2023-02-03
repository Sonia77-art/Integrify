import "./Country.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Country() {
  const { name } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [name]);

  return (
    post && (
      <div className="Country">
        <div className="top">
          <div className="left">
            <p className="initial">{post.name.common[0]}</p>
            <div className="name">
              <p className="p1">
                <strong>{post.name.common}</strong>
              </p>
              <p className="p2">{post.capital}</p>
            </div>
          </div>
          <p className="right">...</p>
        </div>
        <img
          src={post.flags.svg}
          alt={post.name.common}
          width="600"
          height="400"
        />
        <p>
          The country belongs to <span className="blue">{post.region}</span>{" "}
          region and <span className="blue">{post.subregion}</span> sub-region.
          Located at the <span className="blue">{post.latlng[0]}</span> &deg;N
          and <span className="blue">{post.latlng[1]}</span> &deg;W, this
          country has population of{" "}
          <span className="blue">{post.population}</span> and it has gained the
          independent, according to the CIA World Factbook.
        </p>
      </div>
    )
  );
}
