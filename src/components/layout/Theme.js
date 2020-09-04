import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#4173af",
    secondary: "#6b6b6b",
    disabled: "#cfcfcf",
    white: "#fff",
    black: "#222",
    textOnColor: "rgba(20, 20, 20, 0.85)",
  },
  fonts: {
    serif: "'Roboto Slab', sans-serif",
    sans: "'Roboto', serif",
    developer: "'Montserrat', sans-serif",
  },
  spacing: {
    small: ".1rem",
    medium: ".25rem",
    large: ".5rem",
  },
  gutters: {
    small: ".5rem",
    medium: "1rem",
    large: "2rem",
    header: "9rem",
  },
  material: {
    shadow: "0px 2px 4px rgba(0, 0, 0, 0.3);",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
