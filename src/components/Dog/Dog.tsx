import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import StyledDog from "./StyledDog";
import { deleteFavDogThunk } from "../../redux/thunks/dogsThunks";
import { useAppDispatch } from "../../redux/hooks";

interface Props {
  dog: IDog;
}

export const Dog = ({ dog }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const deleteFavDog = () => {
    dispatch(deleteFavDogThunk(dog.id));
  };

  return (
    <StyledDog>
      <CardActionArea className="dog-card">
        <CardContent className="dog-card-content">
          <div className="dog-card-top">
            <div className="image-container">
              <img
                width={"100%"}
                className="dog-card-top__avatar"
                alt={`${dog.name} avatar`}
                src={`../../images/avatars/${dog.name}.png`}
              />
            </div>
            <img
              className="dog-card-top__personality"
              width={20}
              alt={`${dog.name} avatar`}
              src={`../../images/icons/mobile/personalities/inactive/${dog.personality}-inactive.png`}
            />
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
              onClick={() => deleteFavDog()}
              src="../../images/icons/mobile/trash.png"
            />
          </div>
        </CardContent>
      </CardActionArea>
    </StyledDog>
  );
};
