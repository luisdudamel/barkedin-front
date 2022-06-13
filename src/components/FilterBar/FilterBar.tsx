import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { StyledFilterBar } from "./StyledFilterBarr";

interface FuncProps {
  filterAction: (personality: string) => void;
}

export const FilterBar = ({ filterAction }: FuncProps): JSX.Element => {
  return (
    <StyledFilterBar>
      <Box className="filter-bar-container" sx={{ flexGrow: 1 }}>
        <AppBar className="appbar" position="static">
          <Toolbar className="toolbar">
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Ball filter icon"
                src={`../../images/icons/mobile/personalities/inactive/ball-inactive.png`}
                onClick={() => filterAction("Me clickearon")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Ball filter icon"
                src={`../../images/icons/mobile/personalities/inactive/beach-inactive.png`}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Ball filter icon"
                src={`../../images/icons/mobile/personalities/inactive/nature-inactive.png`}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Ball filter icon"
                src={`../../images/icons/mobile/personalities/inactive/frisbee-inactive.png`}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Ball filter icon"
                src={`../../images/icons/mobile/personalities/inactive/walker-inactive.png`}
              ></img>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledFilterBar>
  );
};
