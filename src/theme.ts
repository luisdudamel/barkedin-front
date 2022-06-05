import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { bgcolor } from "@mui/system";

const theme = createTheme({
  typography: {
    fontFamily: ["Outfit"].join(","),
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#2a9d8f",
          },
        },
      },
    },
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
});

export default theme;
