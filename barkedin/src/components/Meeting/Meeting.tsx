import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography } from "@mui/material";
import StyledMeeting from "./StyledMeeting";
import { useAppSelector } from "../../redux/hooks";
import { IMeeting } from "../../interfaces/Meetings";
import { useNavigate } from "react-router-dom";

interface MeetingProps {
  meeting: IMeeting;
}

export const Meeting = ({ meeting }: MeetingProps): JSX.Element => {
  const navigate = useNavigate();
  const currentUserId = useAppSelector((state) => state.user.id);
  const { dog } = meeting;
  const meetingDate = new Date(meeting.day);

  return (
    <StyledMeeting>
      <CardActionArea className="meeting-card">
        <CardContent className="meeting-card-content">
          <div className="meeting-card-top">
            <div className="image-container">
              <img
                width={"100%"}
                className="meeting-card-top__avatar"
                alt={`${dog.name} avatar`}
                src={
                  dog.picture === ""
                    ? "/barkedin/images/dog-placeholder.webp"
                    : `${dog.picturebackup}`
                }
              />
            </div>
            <div className="meeting-card-top-right">
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
                gutterBottom
                variant="h5"
                className="meeting-card-bottom__name"
                component="div"
                onClick={() => navigate(`/barkedin/detail/${dog.id}`)}
              >
                {dog.name}
              </Typography>
              <Typography
                variant="body1"
                className="meeting-card-bottom__title"
                color="text.secondary"
                onClick={() => navigate(`/barkedin/detail/${dog.id}`)}
              >
                {dog.title}
              </Typography>
            </div>
            <div className="meeting-card-bottom-location">
              {meeting.location}
              <img
                className="dog-card-top__personality"
                width={40}
                height={40}
                alt={`Location logo`}
                src={`../../barkedin/images/location.webp`}
              />
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </StyledMeeting>
  );
};
