import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { StyledFilterBar } from "./StyledFilterBarr";

interface FilterBarProps {
  filterAction: (personality: string) => void;
}

export const FilterBar = ({ filterAction }: FilterBarProps): JSX.Element => {
  const [activeFilter, setActiveFilter] = React.useState("");
  const [isFiltered, setIsFiltered] = React.useState(false);

  const filterAndChangeColor = (personality: string) => {
    if (!isFiltered) {
      filterAction(`?personality=${personality}`);
      setActiveFilter(personality);
      setIsFiltered(!isFiltered);
      return;
    }
    filterAction("");
    setActiveFilter("");
    setIsFiltered(!isFiltered);
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
                height={40}
                alt={`Ball filter icon ${
                  activeFilter !== "Ball" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "Ball"
                    ? `../../barkedin/images/icons/mobile/personalities/active/ball-active.png`
                    : `../../barkedin/images/icons/mobile/personalities/inactive/ball-inactive.png`
                }
                onClick={() => filterAndChangeColor("Ball")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                height={40}
                alt={`Beach filter icon ${
                  activeFilter !== "Beach" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "Beach"
                    ? `../../barkedin/images/icons/mobile/personalities/active/beach-active.png`
                    : `../../barkedin/images/icons/mobile/personalities/inactive/beach-inactive.png`
                }
                onClick={() => filterAndChangeColor("Beach")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                height={40}
                alt={`Nature filter icon ${
                  activeFilter !== "Nature" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "Nature"
                    ? `../../barkedin/images/icons/mobile/personalities/active/nature-active.png`
                    : `../../barkedin/images/icons/mobile/personalities/inactive/nature-inactive.png`
                }
                onClick={() => filterAndChangeColor("Nature")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                height={40}
                alt={`Frisbee filter icon ${
                  activeFilter !== "Frisbee" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "Frisbee"
                    ? `../../barkedin/images/icons/mobile/personalities/active/frisbee-active.png`
                    : `../../barkedin/images/icons/mobile/personalities/inactive/frisbee-inactive.png`
                }
                onClick={() => filterAndChangeColor("Frisbee")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                height={40}
                alt={`Walker filter icon ${
                  activeFilter !== "Walker" ? "inactive" : "active"
                }`}
                src={
                  activeFilter === "Walker"
                    ? `../../barkedin/images/icons/mobile/personalities/active/walker-active.png`
                    : `../../barkedin/images/icons/mobile/personalities/inactive/walker-inactive.png`
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
