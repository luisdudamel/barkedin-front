import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import StyledDog from "./StyledDog";
import { deleteFavDogThunk } from "../../redux/thunks/dogsThunks";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

interface Props {
  dog: IDog;
}

export const Dog = ({ dog }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const deleteFavDog = () => {
    dispatch(deleteFavDogThunk(dog.id));
  };

  const navigate = useNavigate();

  return (
    <StyledDog>
      <CardActionArea className="dog-card">
        <CardContent className="dog-card-content">
          <div className="dog-card-top">
            <div className="image-container">
              <img
                width={"100%"}
                className="dog-card-top__avatar"
                crossOrigin=""
                alt={`${dog.name} avatar`}
                src={`${process.env.REACT_APP_API_URL_DEV}uploads/images/${dog.picture}`}
                onClick={() => navigate(`/detail/${dog.id}`)}
              />
            </div>
            <img
              className="dog-card-top__personality"
              width={20}
              alt={`${dog.name} personality`}
              src={`../../images/icons/mobile/personalities/inactive/${dog.personality}-inactive.png`}
              onClick={() => navigate(`/detail/${dog.id}`)}
            />
          </div>
          <div className="dog-card-bottom">
            <div>
              <Typography
                gutterBottom
                variant="h5"
                className="dog-card-bottom__name"
                component="div"
                onClick={() => navigate(`/detail/${dog.id}`)}
              >
                {dog.name}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__title"
                color="text.secondary"
                onClick={() => navigate(`/detail/${dog.id}`)}
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
