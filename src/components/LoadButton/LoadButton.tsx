import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { StyledProfileBar } from "../ProfileBar/StyledProfileBar";

export const LoadButton = (): JSX.Element => {
  return (
    <StyledProfileBar>
      <Box className="profile-bar-container" sx={{ flexGrow: 1 }}>
        <Button
          className="profile-button"
          variant="contained"
          endIcon={<AddCircle />}
        >
          Load more
        </Button>
      </Box>
    </StyledProfileBar>
  );
};
