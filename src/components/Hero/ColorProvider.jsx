import { createContext, useState, useEffect, useContext } from "react";

export const ColorContext = createContext();

const colors = ["#FBE9BA", "#CBDED3", "#BFD6EA", "#F2C0BD", "#F4C8BA"];

const laptopColors = {
  "#FBE9BA": "#F4C550",
  "#CBDED3": "#F4C550",
  "#BFD6EA": "#9FB7CE",
  "#F2C0BD": "#E0A39A",
  "#F4C8BA": "#F0AA8D",
};

const ColorProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState(colors[0]);

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setPrimaryColor(randomColor);
    document.documentElement.style.setProperty("--primary", randomColor);

    const laptopColor = laptopColors[randomColor];
    console.log("Laptop color:", laptopColor);
    document.documentElement.style.setProperty("--laptop-color", laptopColor);
  }, []);

  return (
    <ColorContext.Provider value={primaryColor}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;

export function usePrimaryColor() {
  return useContext(ColorContext);
}
