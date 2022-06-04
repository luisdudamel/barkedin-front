import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import StyledDog from "./StyledDog";

import { FavoriteBorder } from "@mui/icons-material";

interface Props {
  dog: IDog;
}

export const DogCard = ({ dog }: Props): JSX.Element => {
  return (
    <CardActionArea>
      <StyledDog>
        <CardContent>
          <div className="dog-card-top">
            <img
              className="card-avatar"
              width={250}
              alt={`${dog.name} avatar`}
              src="../../devresources/images/avatars/beagle.jpg"
            />
            <CardActions>
              <img
                className="card-personality"
                width={20}
                alt={`${dog.name} avatar`}
                src="../../images/icons/mobile/personalities/inactive/ball-inactive.png"
              />
            </CardActions>
          </div>
          <Typography gutterBottom variant="h5" component="div">
            {dog.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </StyledDog>
    </CardActionArea>
  );
};
