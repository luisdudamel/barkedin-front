import * as React from "react";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import StyledMeeting from "./StyledMeeting";
import { deleteFavDogThunk } from "../../redux/thunks/dogsThunks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { IMeeting } from "../../interfaces/Meetings";

interface MeetingProps {
  meeting: IMeeting;
}

export const Meeting = ({ meeting }: MeetingProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector((state) => state.user.id);

  const deleteFavDog = () => {
    dispatch(deleteFavDogThunk(meeting.id));
  };

  const navigate = useNavigate();

  return (
    <StyledMeeting>
      <CardActionArea className="dog-card">
        <CardContent className="dog-card-content">
          <div className="dog-card-top">
            <div className="image-container"></div>
            <div>{meeting.creator}</div>
          </div>
          <div className="dog-card-bottom"></div>
        </CardContent>
      </CardActionArea>
    </StyledMeeting>
  );
};
