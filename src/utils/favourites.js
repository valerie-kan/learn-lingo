export const getFavourites = () => {
  try {
    return JSON.parse(localStorage.getItem("favouriteTeachers")) || [];
  } catch {
    return [];
  }
};

export const saveFavourites = (list) => {
  localStorage.setItem("favouriteTeachers", JSON.stringify(list));
};
