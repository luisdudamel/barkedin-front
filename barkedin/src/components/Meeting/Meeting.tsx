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
              />
            </div>
            <div>
              <Typography
                gutterBottom
                variant="h5"
                className="dog-card-bottom__name"
                component="div"
                onClick={() => navigate(`/barkedin/detail/${dog.id}`)}
              >
                {meetingDate.toDateString().slice(0, -4)}
              </Typography>
              <Typography
                variant="body1"
                className="dog-card-bottom__title"
                color="text.secondary"
                onClick={() => navigate(`/barkedin/detail/${dog.id}`)}
              >
                {meetingDate.toLocaleTimeString().slice(0, -3)}
              </Typography>
            </div>
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
          </div>
        </CardContent>
      </CardActionArea>
    </StyledMeeting>
  );
};
