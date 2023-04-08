/* export const handleFavs = (id, name, useName, odontologos, setOdontologos) => {
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
 */
export const handleFavs = (id, name, useName, odontologos) => {
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];
  const isCurrentlyFav = favs.some((fav) => fav.id === id);

  const newFavs = isCurrentlyFav
    ? favs.filter((fav) => fav.id !== id)
    : [...favs, { name, useName, id }];

  localStorage.setItem("favorites", JSON.stringify(newFavs));
  const updatedOdontologos = odontologos.map((odontologo) =>
    odontologo.id === id
      ? { ...odontologo, isFav: !isCurrentlyFav }
      : odontologo
  );

  return updatedOdontologos;
};
