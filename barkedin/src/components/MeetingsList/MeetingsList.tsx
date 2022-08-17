import { Grid } from "@mui/material";
import { IMeeting } from "../../interfaces/Meetings";
import { Meeting } from "../Meeting/Meeting";

interface MeetingsProps {
  meetings: IMeeting[];
}

export const MeetingsList = ({ meetings }: MeetingsProps): JSX.Element => {
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
        {meetings.map((meeting) => {
          return (
            <Grid
              className="dogs-grid"
              xs={12}
              md={4}
              lg={3}
              margin={3}
              key={meeting.id}
              item
            >
              <Meeting meeting={meeting}></Meeting>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
