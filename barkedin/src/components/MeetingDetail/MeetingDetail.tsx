import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { LoadingBarLinear } from "../LoadingBarLinear/LoadingBarLinear";
import { IMeeting } from "../../interfaces/Meetings";
import StyledMeetingDetail from "./StyledMeetingDetail";
import { Button } from "@mui/material";
import { deleteMeetingThunk } from "../../redux/thunks/meetingsThunks";
interface DogDetailProps {
  meetingToShow: IMeeting;
  isOwnMeting: boolean;
}

export const MeetingDetail = ({
  meetingToShow,
  isOwnMeting,
}: DogDetailProps): JSX.Element => {
  const loading = useAppSelector((state) => state.ui.loading);
  const meetingDate = new Date(meetingToShow.day);
  const gMapsKey = process.env.REACT_APP_GOOGLE_MAPS_KEY as string;
  const dispatch = useAppDispatch();

  const deleteMeeting = () => {
    dispatch(deleteMeetingThunk(meetingToShow.id));
  };

  return (
    <>
      {loading && <LoadingBarLinear />}
      <StyledMeetingDetail>
        <CardContent className="meeting-card-content">
          <div className="meeting-card-top">
            <div className="image-container">
              <img
                width={"100%"}
                className="meeting-card-top__avatar"
                alt={`${meetingToShow.dog.name} avatar `}
                src={
                  meetingToShow.dog.picture === ""
                    ? "/barkedin/images/dog-placeholder.webp"
                    : `${meetingToShow.dog.picturebackup}`
                }
              />
            </div>
            <div>
              <Typography
                gutterBottom
                variant="h5"
                className="meeting-card-top__date"
                component="div"
              >
                {meetingDate.toDateString().slice(4, -4)}
              </Typography>
              <Typography
                variant="body1"
                className="meeting-card-top__time"
                color="text.secondary"
              >
                {meetingDate.toLocaleTimeString().slice(0, -3)}
              </Typography>
            </div>
          </div>
          <div className="meeting-card-bottom">
            <div>
              <Typography
                variant="body1"
                className="meeting-card-bottom__name"
                color="text.secondary"
              >
                {meetingToShow.dog.name}
              </Typography>
              <Typography
                variant="body1"
                className="meeting-card-bottom__title"
                color="text.secondary"
              >
                {meetingToShow.dog.title}
              </Typography>
              <Typography
                variant="body1"
                className="meeting-card-bottom__bio"
                color="text.secondary"
              >
                {meetingToShow.description}
              </Typography>
            </div>
          </div>
        </CardContent>
      </StyledMeetingDetail>
      <div className="map-container">
        <div className="map-container-heading">
          <h3 className="map-container-heading__title">Location</h3>
          <div className="map-container-heading__location">
            <h3>{meetingToShow.location}</h3>
            <img
              width={30}
              height={30}
              src="../../barkedin/images/location.webp"
              alt="Location icon"
            />
          </div>
        </div>
        <iframe
          className="map-container-frame"
          title="Meeting Location"
          frameBorder="2"
          style={{ border: 1 }}
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
          src={`https://www.google.com/maps/embed/v1/place?key=${gMapsKey}&q=${meetingToShow.location}`}
        ></iframe>
      </div>
      {isOwnMeting && (
        <Button
          onClick={deleteMeeting}
          className="logout delete-button"
          variant="contained"
        >
          Delete meeting
        </Button>
      )}
    </>
  );
};
