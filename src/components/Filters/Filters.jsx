import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";

import css from "./Filters.module.css";

import { getLanguages } from "../../utils/filtration";
import { getLevels } from "../../utils/filtration";
import { getPrices } from "../../utils/filtration";

// import { resetTeachers } from "../../redux/teachers/slice";
// import { getTeachers } from "../../redux/teachers/operations";

import SelectInput from "../SelectInput/SelectInput";

const Filters = ({ teachers }) => {
  // const dispatch = useDispatch();

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isLevelsDropdownOpen, setIsLevelsDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const [langSelected, setLangSelected] = useState(null);
  const [levelSelected, setLevelSelected] = useState(null);
  const [priceSelected, setPriceSelected] = useState(null);

  // const [filters, setFilters] = useState({
  //   language: null,
  //   level: null,
  //   price: null,
  // });

  const selectLangRef = useRef(null);
  const selectLevelRef = useRef(null);
  const selectPriceRef = useRef(null);

  // useEffect(() => {
  //   if (teachers.length > 0) {
  //     setFilters((prev) => ({
  //       language: prev.language || getLanguages(teachers)[0],
  //       level: prev.level || getLevels(teachers)[0],
  //       price: prev.price || getPrices(teachers)[0],
  //     }));
  //   }
  // }, [teachers]);
  // console.log(filters.language);
  // console.log(filters.level);
  // console.log(filters.price);

  useEffect(() => {
    if (teachers.length > 0) {
      setLangSelected((prev) => prev || getLanguages(teachers)[0]);
      setLevelSelected((prev) => prev || getLevels(teachers)[0]);
      setPriceSelected((prev) => prev || getPrices(teachers)[0]);
    }
  }, [teachers]);

  // const handleFilterChange = () => {
  //   dispatch(resetTeachers());
  //   dispatch(
  //     getTeachers({
  //       perPage: 4,
  //       filters: {
  //         language: langSelected,
  //         level: levelSelected,
  //         price: parseInt(priceSelected), // якщо price — число
  //       },
  //     })
  //   );
  // };

  // useEffect(() => {
  //   if (filters.language || filters.level || filters.price) {
  //     dispatch(getTeachers({ filters, perPage: 4 }));
  //   }
  // }, [filters.language, filters.level, filters.price]);

  return (
    <div className={css.filtersWrapper}>
      {/* {filters.language && ( */}
      {langSelected && (
        <SelectInput
          selectName="Languages"
          filtersList={getLanguages(teachers)}
          isOpen={isLangDropdownOpen}
          setIsOpen={setIsLangDropdownOpen}
          selectedItem={langSelected}
          // {filters.language}
          setSelectedItem={setLangSelected}
          // {(val) => {
          //   setLangSelected(val);
          //   handleFilterChange(); // фільтр після оновлення
          // }}
          // {(value) => handleFilterChange("language", value)}
          selectRef={selectLangRef}
          // onChange={handleFilterChange}
        />
      )}
      {/* {filters.level && ( */}
      {priceSelected && (
        <SelectInput
          selectName="Level of knowledge"
          filtersList={getLevels(teachers)}
          isOpen={isLevelsDropdownOpen}
          setIsOpen={setIsLevelsDropdownOpen}
          selectedItem={levelSelected}
          // {filters.level}
          setSelectedItem={setLevelSelected}
          // {(val) => {
          //   setLevelSelected(val);
          //   handleFilterChange(); // фільтр після оновлення
          // }}
          // {(value) => handleFilterChange("level", value)}
          selectRef={selectLevelRef}
          // onChange={handleFilterChange}
        />
      )}
      {/* {filters.price && ( */}
      {priceSelected && (
        <SelectInput
          selectName="Price"
          filtersList={getPrices(teachers)}
          isOpen={isPriceDropdownOpen}
          setIsOpen={setIsPriceDropdownOpen}
          selectedItem={priceSelected}
          // {filters.price}
          setSelectedItem={setPriceSelected}
          // {(val) => {
          //   setPriceSelected(val);
          //   handleFilterChange(); // фільтр після оновлення
          // }}
          // {(value) =>
          //   handleFilterChange("price", parseInt(value))
          // }
          selectRef={selectPriceRef}
          // onChange={handleFilterChange}
        />
      )}
    </div>
  );
};

export default Filters;
