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
                alt="Ball filter icon"
                src={
                  activeFilter === "ball"
                    ? `../../images/icons/mobile/personalities/active/ball-active.png`
                    : `../../images/icons/mobile/personalities/inactive/ball-inactive.png`
                }
                onClick={() => filterAndChangeColor("ball")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Beach filter icon"
                src={
                  activeFilter === "beach"
                    ? `../../images/icons/mobile/personalities/active/beach-active.png`
                    : `../../images/icons/mobile/personalities/inactive/beach-inactive.png`
                }
                onClick={() => filterAndChangeColor("beach")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Nature filter icon"
                src={
                  activeFilter === "nature"
                    ? `../../images/icons/mobile/personalities/active/nature-active.png`
                    : `../../images/icons/mobile/personalities/inactive/nature-inactive.png`
                }
                onClick={() => filterAndChangeColor("nature")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Frisbee filter icon"
                src={
                  activeFilter === "frisbee"
                    ? `../../images/icons/mobile/personalities/active/frisbee-active.png`
                    : `../../images/icons/mobile/personalities/inactive/frisbee-inactive.png`
                }
                onClick={() => filterAndChangeColor("frisbee")}
              ></img>
            </Button>
            <Button className="logout filter-button" variant="contained">
              <img
                className="filter-button__image--inactive"
                width={40}
                alt="Walker filter icon"
                src={
                  activeFilter === "walker"
                    ? `../../images/icons/mobile/personalities/active/walker-active.png`
                    : `../../images/icons/mobile/personalities/inactive/walker-inactive.png`
                }
                onClick={() => filterAndChangeColor("walker")}
              ></img>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledFilterBar>
  );
};
