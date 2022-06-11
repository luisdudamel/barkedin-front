import { AddCircle } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { StyledProfileBar } from "../ProfileBar/StyledProfileBar";

export const LoadButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledProfileBar>
      <Box className="profile-bar-container" sx={{ flexGrow: 1 }}>
        <AppBar className="appbar" position="static">
          <Toolbar className="toolbar">
            <Button
              className="profile-button"
              variant="contained"
              endIcon={<AddCircle />}
              onClick={() => console.log("Pidiendo mas")}
            >
              Load more
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledProfileBar>
  );
};
