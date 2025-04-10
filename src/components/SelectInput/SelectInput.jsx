import { ReactSVG } from "react-svg";
import clsx from "clsx";

import css from "./SelectInput.module.css";

import arrowDown from "../../assets/icons/arrow-down.svg";
import { useEffect } from "react";

const SelectInput = ({
  isOpen,
  setIsOpen,
  filtersList,
  selectName,
  selectedItem,
  setSelectedItem,
  selectRef,
  onChange,
}) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectRef, setIsOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (item) => {
    setSelectedItem(item);
    onChange?.(item);
    setIsOpen(false);
  };

  return (
    <div className={css.selectWrapper} ref={selectRef}>
      <span className={css.selectName}>{selectName}</span>
      <div className={css.customSelect} onClick={toggleDropdown}>
        <div className={css.selected}>
          {selectName === "Price" ? `${selectedItem} $` : selectedItem}
        </div>
        <ReactSVG
          className={clsx(css.arrow, isOpen && css.open)}
          src={arrowDown}
        />
      </div>
      {isOpen && (
        <ul className={css.dropdown}>
          {filtersList.map((item) => (
            <li
              className={clsx(
                css.option,
                selectedItem === item && css.selected
              )}
              key={item}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;
