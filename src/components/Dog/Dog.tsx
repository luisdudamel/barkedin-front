import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import StyledDog from "./StyledDog";

interface Props {
  dog: IDog;
}

export const DogCard = ({ dog }: Props): JSX.Element => {
  return (
    <StyledDog>
      <CardActionArea className="dog-card">
        <CardContent className="dog-card-content">
          <div className="dog-card-top">
            <img
              className="dog-card-top__avatar"
              width={250}
              alt={`${dog.name} avatar`}
              src="../../images/avatars/beagle.jpg"
            />
            <CardActions>
              <img
                className="dog-card-top__personality"
                width={20}
                alt={`${dog.name} avatar`}
                src="../../images/icons/mobile/personalities/inactive/ball-inactive.png"
              />
            </CardActions>
          </div>
          <div className="dog-card-bottom">
            <div>
              <Typography
                gutterBottom
                variant="h5"
                className="dog-card-bottom__name"
                component="div"
              >
                {dog.name}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__title"
                color="text.secondary"
              >
                {dog.title}
              </Typography>
            </div>
            <img
              className="dog-card-bottom__delete"
              width={20}
              alt={"Red trash can icon"}
              src="../../images/icons/mobile/trash.png"
            />
          </div>
        </CardContent>
      </CardActionArea>
    </StyledDog>
  );
};
