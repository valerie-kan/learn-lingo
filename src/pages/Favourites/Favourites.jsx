import { useEffect, useState } from "react";

import css from "./Favourites.module.css";

import { getFavourites } from "../../utils/favourites";

import Container from "../../components/Container/Container";
import TeacherCard from "../../components/TeacherCard/TeacherCard";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = getFavourites();
    setFavourites(savedFavourites);
  }, []);

  const handleFavouriteToggle = (updatedList) => {
    setFavourites(updatedList);
  };

  return (
    <Container className={css.favouritesPage}>
      {favourites.length !== 0 ? (
        favourites.map((teacher) => (
          <TeacherCard
            teacher={teacher}
            key={teacher.id}
            onFavouriteToggle={handleFavouriteToggle}
          />
        ))
      ) : (
        <p className={css.noFavouritesMessage}>
          You haven't added any teachers to your favourites yet!
        </p>
      )}
    </Container>
  );
};

export default Favourites;
