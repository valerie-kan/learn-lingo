import { useEffect, useRef, useState } from "react";

import css from "./Filters.module.css";

import { getLanguages } from "../../utils/filtration";
import { getLevels } from "../../utils/filtration";
import { getPrices } from "../../utils/filtration";

import SelectInput from "../SelectInput/SelectInput";

const Filters = ({ teachers }) => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isLevelsDropdownOpen, setIsLevelsDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const [langSelected, setLangSelected] = useState(null);
  const [levelSelected, setLevelSelected] = useState(null);
  const [priceSelected, setPriceSelected] = useState(null);

  const selectLangRef = useRef(null);
  const selectLevelRef = useRef(null);
  const selectPriceRef = useRef(null);

  useEffect(() => {
    if (teachers.length > 0) {
      setLangSelected((prev) => prev || getLanguages(teachers)[0]);
      setLevelSelected((prev) => prev || getLevels(teachers)[0]);
      setPriceSelected((prev) => prev || getPrices(teachers)[0]);
    }
  }, [teachers]);

  return (
    <div className={css.filtersWrapper}>
      {langSelected && (
        <SelectInput
          selectName="Languages"
          filtersList={getLanguages(teachers)}
          isOpen={isLangDropdownOpen}
          setIsOpen={setIsLangDropdownOpen}
          selectedItem={langSelected}
          setSelectedItem={setLangSelected}
          selectRef={selectLangRef}
        />
      )}
      {priceSelected && (
        <SelectInput
          selectName="Level of knowledge"
          filtersList={getLevels(teachers)}
          isOpen={isLevelsDropdownOpen}
          setIsOpen={setIsLevelsDropdownOpen}
          selectedItem={levelSelected}
          setSelectedItem={setLevelSelected}
          selectRef={selectLevelRef}
        />
      )}
      {priceSelected && (
        <SelectInput
          selectName="Price"
          filtersList={getPrices(teachers)}
          isOpen={isPriceDropdownOpen}
          setIsOpen={setIsPriceDropdownOpen}
          selectedItem={priceSelected}
          setSelectedItem={setPriceSelected}
          selectRef={selectPriceRef}
        />
      )}
    </div>
  );
};

export default Filters;
