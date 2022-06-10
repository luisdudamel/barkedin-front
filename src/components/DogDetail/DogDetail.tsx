import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StyledDogDetail from "./StyledDogDetail";
import { useNavigate } from "react-router-dom";
import { IDog } from "../../interfaces/Dogs";

interface Props {
  dogToShow: IDog;
}

export const DogDetail = ({ dogToShow }: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
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
                  variant="body1"
                  className="dog-card-bottom__title"
                  color="text.secondary"
                >
                  {dogToShow.title}
                </Typography>
                <Typography
                  variant="body1"
                  className="dog-card-bottom__bio"
                  color="text.secondary"
                >
                  {dogToShow.bio}
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </StyledDogDetail>
      <StyledDogDetail className="dog-card-secondary-container">
        <CardContent>
          <div className="dog-card-secondary">
            <div>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              >
                Age: {dogToShow.age}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              >
                Breed: {dogToShow.breed}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              >
                Weight: {dogToShow.weight}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              >
                Favorite toy: {dogToShow.toy}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              >
                Title: {dogToShow.title}
              </Typography>
            </div>
          </div>
        </CardContent>
      </StyledDogDetail>
    </>
  );
};
