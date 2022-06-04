import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ['"Outfit"', "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: "#ffc027",
    },
    primary: {
      main: "#264653",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },

  // components: {
  //   MuiGrid: {
  //     styleOverrides: {
  //       root: {
  //         margin: "none"
  //       },
  //     },
  //   },
  // },
});

export default theme;
