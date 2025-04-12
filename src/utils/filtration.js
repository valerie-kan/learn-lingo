export const getLanguages = (teachers) => {
  const languages = teachers.flatMap((teacher) => teacher.languages);
  return [...new Set(languages)];
};

export const getLevels = (teachers) => {
  const levels = teachers.flatMap((teacher) => teacher.levels);
  return [...new Set(levels)];
};

export const getPrices = (teachers) => {
  const prices = teachers
    .map((teacher) => teacher.price_per_hour)
    .sort((a, b) => a - b);
  return [...new Set(prices)];
};
