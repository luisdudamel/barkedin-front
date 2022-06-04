import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import StyledDog from "./StyledDog";

interface Props {
  dog: IDog;
}

export const DogCard = ({ dog }: Props): JSX.Element => {
  return (
    <StyledDog>
      <CardActionArea>
        <CardMedia
          sx={{ width: 100 }}
          component="img"
          image="../../images/doberman.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dog.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </StyledDog>
  );
};
