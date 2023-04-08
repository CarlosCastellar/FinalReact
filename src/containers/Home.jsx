import axios from "axios";
import React, { useEffect } from "react";
import Card from "../components/Card";
import { useGlobalStatesContext } from "../context/DataContext";

const Home = () => {
  const { theme, odontologos, setOdontologos } = useGlobalStatesContext();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setOdontologos(res.data);
    });
  }, []);

  const handleFavs = (name, useName, id) => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCurrentlyFav = favs.some((fav) => fav.id === id);

    const newFavs = isCurrentlyFav
      ? favs.filter((fav) => fav.id !== id)
      : [...favs, { name, useName, id }];

    localStorage.setItem("favorites", JSON.stringify(newFavs));
    setOdontologos(
      odontologos.map((odontologo) =>
        odontologo.id === id
          ? { ...odontologo, isFav: !isCurrentlyFav }
          : odontologo
      )
    );
  };

  return (
    <main className={`${theme.color} container`}>
      <h1>Home</h1>
      <div className="card-grid">
        {odontologos.map((odontologo) => (
          <Card
            key={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            id={odontologo.id}
            handleFavs={() =>
              handleFavs(odontologo.name, odontologo.username, odontologo.id)
            }
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
