import React from "react";
import Card from "../components/Card";
import { useGlobalStatesContext } from "../context/DataContext";

const Favs = () => {
  const { theme } = useGlobalStatesContext();
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];
  const handleFavs = (id, name, useName) => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCurrentlyFav = favs.some((fav) => fav.id === id);

    const newFavs = isCurrentlyFav
      ? favs.filter((fav) => fav.id !== id)
      : [...favs, { name, useName, id }];

    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };
  return (
    <div className={theme.color}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
              handleFavs={() => handleFavs(fav.id, fav.name, fav.useName)}
            />
          ))
        ) : (
          <p>No hay favoritos</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
