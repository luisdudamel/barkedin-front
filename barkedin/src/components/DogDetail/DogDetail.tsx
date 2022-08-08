import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import StyledDogDetail from "./StyledDogDetail";
import { useNavigate } from "react-router-dom";
import { IDog } from "../../interfaces/Dogs";
import { useAppSelector } from "../../redux/hooks";
import { LoadingBarLinear } from "../LoadingBarLinear/LoadingBarLinear";

interface DogDetailProps {
  dogToShow: IDog;
  isOwnDog: boolean;
}

export const DogDetail = ({
  dogToShow,
  isOwnDog,
}: DogDetailProps): JSX.Element => {
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.ui.loading);

  return (
    <>
      {loading && <LoadingBarLinear />}
      <StyledDogDetail>
        <CardContent className="dog-card-content">
          <div className="dog-card-top">
            <div className="image-container">
              <img
                width={"100%"}
                className="dog-card-top__avatar"
                alt={`${dogToShow.name} avatar `}
                src={
                  dogToShow.picture === ""
                    ? "/images/dog-placeholder.webp"
                    : `${dogToShow.picturebackup}`
                }
              />
            </div>
            <img
              className="dog-card-top__personality"
              width={20}
              alt={`${dogToShow.name} personality`}
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
                <span className="dog-card-bottom__bio-characteristic">
                  Age:{" "}
                </span>
                <span className="dog-card-bottom__bio-property">
                  {dogToShow.age} years
                </span>
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              >
                <span className="dog-card-bottom__bio-characteristic">
                  Breed:{" "}
                </span>
                <span className="dog-card-bottom__bio-property">
                  {dogToShow.breed}
                </span>
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              >
                <span className="dog-card-bottom__bio-characteristic">
                  Weight:{" "}
                </span>
                <span className="dog-card-bottom__bio-property">
                  {dogToShow.weight} kg
                </span>
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              >
                <span className="dog-card-bottom__bio-characteristic">
                  Favorite toy:{" "}
                </span>
                <span className="dog-card-bottom__bio-property">
                  {dogToShow.toy}
                </span>
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__bio"
                color="text.secondary"
              ></Typography>
            </div>
          </div>
        </CardContent>
      </StyledDogDetail>
      {isOwnDog && (
        <Button
          onClick={() => navigate(`/edit/${dogToShow.id}`)}
          className="logout edit-button"
          variant="contained"
        >
          Edit profile
        </Button>
      )}
    </>
  );
};
