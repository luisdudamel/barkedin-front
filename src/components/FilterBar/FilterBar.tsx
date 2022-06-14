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
  const [activeFilter, setActiveFilter] = React.useState("");

  const filterAndChangeColor = (personality: string) => {
    filterAction(`?personality=${personality}`);
    setActiveFilter(personality);
  };

  return (
    <StyledFilterBar>
      <Box className="filter-bar-container" sx={{ flexGrow: 1 }}>
        <AppBar className="appbar" position="static">
          <Toolbar className="toolbar">
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt={`Ball filter icon ${
                  activeFilter !== "ball" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "ball"
                    ? `../../images/icons/mobile/personalities/active/ball-active.png`
                    : `../../images/icons/mobile/personalities/inactive/ball-inactive.png`
                }
                onClick={() => filterAndChangeColor("Ball")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt={`Beach filter icon ${
                  activeFilter !== "beach" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "beach"
                    ? `../../images/icons/mobile/personalities/active/beach-active.png`
                    : `../../images/icons/mobile/personalities/inactive/beach-inactive.png`
                }
                onClick={() => filterAndChangeColor("Beach")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt={`Nature filter icon ${
                  activeFilter !== "nature" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "nature"
                    ? `../../images/icons/mobile/personalities/active/nature-active.png`
                    : `../../images/icons/mobile/personalities/inactive/nature-inactive.png`
                }
                onClick={() => filterAndChangeColor("Nature")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt={`Frisbee filter icon ${
                  activeFilter !== "frisbee" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "frisbee"
                    ? `../../images/icons/mobile/personalities/active/frisbee-active.png`
                    : `../../images/icons/mobile/personalities/inactive/frisbee-inactive.png`
                }
                onClick={() => filterAndChangeColor("Frisbee")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt={`Walker filter icon ${
                  activeFilter !== "walker" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "walker"
                    ? `../../images/icons/mobile/personalities/active/walker-active.png`
                    : `../../images/icons/mobile/personalities/inactive/walker-inactive.png`
                }
                onClick={() => filterAndChangeColor("Walker")}
              ></img>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledFilterBar>
  );
};
