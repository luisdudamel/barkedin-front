import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IDog } from "../../interfaces/Dogs";
import StyledDog from "./StyledDog";
import { deleteFavDogThunk } from "../../redux/thunks/dogsThunks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

interface DogProps {
  dog: IDog;
}

export const Dog = ({ dog }: DogProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector((state) => state.user.id);

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
                alt={`${dog.name} avatar`}
                src={
                  dog.picture === ""
                    ? "/barkedin/images/dog-placeholder.webp"
                    : `${dog.picturebackup}`
                }
                onClick={() => navigate(`/barkedin/detail/${dog.id}`)}
              />
            </div>
            <img
              className="dog-card-top__personality"
              width={70}
              height={70}
              alt={`${dog.name} personality`}
              src={`../../barkedin/images/icons/mobile/personalities/inactive/${dog.personality}-inactive.png`}
              onClick={() => navigate(`/barkedin/detail/${dog.id}`)}
            />
          </div>
          <div className="dog-card-bottom">
            <div>
              <Typography
                gutterBottom
                variant="h5"
                className="dog-card-bottom__name"
                component="div"
                onClick={() => navigate(`/barkedin/detail/${dog.id}`)}
              >
                {dog.name}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__title"
                color="text.secondary"
                onClick={() => navigate(`/barkedin/detail/${dog.id}`)}
              >
                {dog.title}
              </Typography>
            </div>
            {currentUserId === dog.owner ? (
              <img
                className="dog-card-bottom__delete"
                width={20}
                alt={"Red trash can icon"}
                onClick={() => deleteFavDog()}
                src="../../barkedin/images/icons/mobile/trash.png"
              />
            ) : (
              ""
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </StyledDog>
  );
};
