import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgba(255,0,0,0.5)",
      main: "rgba(255,0,0,0.8)",
      dark: "rgba(255,0,0,1)",
    },
    secondary: {
      light: "rgba(0,255,0,0.5)",
      main: "rgba(0,255,0,0.8)",
      dark: "rgba(0,255,0,1)",
    },

    background: {
      grey: {
        light: "#999",
        main: "#666",
        dark: "#333",
      },
    },

    text: {
      primary: "#ff0000",
      secondary: "#0000ff",
      yellow: "#ffff00",
    },
  },
  typography: {
    h1: {
      fontSize: 90,
      fontWeight: 700,
    },
  },
  spacing: 10,
});

export default theme;
