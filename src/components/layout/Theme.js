import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#4173af",
    secondary: "#6b6b6b",
    disabled: "#cfcfcf",
    white: "#fff",
    black: "#000",
  },
  fonts: {
    serif: "'Roboto Slab', sans-serif",
    sans: "'Roboto', serif",
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
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
