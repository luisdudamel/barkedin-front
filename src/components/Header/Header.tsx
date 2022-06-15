import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { StyledHeader } from "./StyledHeader";

interface HeaderProps {
  text: string | undefined;
}

export const Header = ({ text }: HeaderProps): JSX.Element => {
  return (
    <StyledHeader>
      <Box className="header-container" sx={{ flexGrow: 1 }}>
        <AppBar className="appbar" position="static">
          <Toolbar>
            <Typography
              className="page-title"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {text}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledHeader>
  );
};
