import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  appSize: "10px",
  colors: {
    text: "#000",
    button: "#f04437",
    secondary: "#8693AD",
    background: "#fff",
    menuBg: "rgba(250,250,250,.7)",
    shadowOne: "rgba(0,0,0,0.5)",
    shadowTwo: "rgba(0,0,0,0.8)",
  },
  size: {
    h1: "50px",
    h2: "40px",
    h3: "30px",
    h4: "27px",
    h5: "22px",
    p: "18px",
    a: "16px",
    maxWidth: "1200px",
  },
  shadow: {
    elevations: [
      "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
      "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
      "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)",
      "box-shadow: 3px 2px rgba(42, 43, 49,.3)",
    ],
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
};

export const darkTheme: DefaultTheme = {
  appSize: "10px",
  colors: {
    text: "#fff",
    button: "#f04437",
    secondary: "#8693AD",
    background: "#212121",
    menuBg: "rgba(33,33,33,.7)",
    shadowOne: "rgba(0,0,0,0.5)",
    shadowTwo: "rgba(0,0,0,0.8)",
  },
  size: {
    h1: "50px",
    h2: "40px",
    h3: "30px",
    h4: "27px",
    h5: "22px",
    p: "18px",
    a: "16px",
    maxWidth: "1200px",
  },
  shadow: {
    elevations: [
      "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
      "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
      "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)",
      "box-shadow: 3px 2px rgba(42, 43, 49,.3)",
    ],
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
};
