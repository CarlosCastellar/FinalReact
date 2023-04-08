import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hospitalIcon from "../assets/hospital.png";
import { FaThumbtack, FaTimes } from "react-icons/fa";
const Card = ({ name, useName, id, handleFavs }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCurrentlyFav = favs.some((fav) => fav.id === id);
    setIsFav(isCurrentlyFav);
  }, []);

  const toggleFav = () => {
    handleFavs();
    setIsFav(!isFav);
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img src={hospitalIcon} alt={useName} />
        <h4>{name}</h4>
        <p>{useName}</p>
      </Link>
      <button onClick={toggleFav} className="favButton">
        {isFav ? (
          <>
            <FaTimes /> Quitar Favorito
          </>
        ) : (
          <>
            <FaThumbtack /> Agregar Favorito
          </>
        )}
      </button>
    </div>
  );
};

export default Card;
