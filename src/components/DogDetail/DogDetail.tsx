import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import StyledDogDetail from "./StyledDogDetail";
import { deleteFavDogThunk } from "../../redux/thunks/dogsThunks";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { IDog } from "../../interfaces/Dogs";

interface Props {
  dogToShow: IDog;
}

export const DogDetail = ({ dogToShow }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const deleteFavDog = () => {
    dispatch(deleteFavDogThunk(dogToShow.id));
  };

  const navigate = useNavigate();

  return (
    <StyledDogDetail>
      <CardActionArea className="dog-card">
        <CardContent className="dog-card-content">
          <div className="dog-card-top">
            <div className="image-container">
              <img
                width={"100%"}
                className="dog-card-top__avatar"
                crossOrigin=""
                alt={`${dogToShow.name} avatar`}
                src={`${process.env.REACT_APP_API_URL_DEV}uploads/images/${dogToShow.picture}`}
                onClick={() => navigate(`/edit/${dogToShow.id}`)}
              />
            </div>
            <img
              className="dog-card-top__personality"
              width={20}
              alt={`${dogToShow.name} avatar`}
              src={`../../images/icons/mobile/personalities/inactive/${dogToShow.personality}-inactive.png`}
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
                {dogToShow.name}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__title"
                color="text.secondary"
              >
                {dogToShow.title}
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
    </StyledDogDetail>
  );
};
