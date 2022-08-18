import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMeeting } from "../../interfaces/Meetings";

const initalState: IMeeting[] = [];

const meetingsSlice = createSlice({
  name: "meetings",
  initialState: initalState,
  reducers: {
    loadAllMeetings: (meetings, action: PayloadAction<IMeeting[]>) => [
      ...action.payload,
    ],
    deleteMeeting: (meetings, action: PayloadAction<IMeeting["id"]>) => [
      ...meetings.filter((meeting) => meeting.id !== action.payload),
    ],
  },
});

export const {
  loadAllMeetings: loadAllMeetingsActionCreator,
  deleteMeeting: deleteMeetingActionCreator,
} = meetingsSlice.actions;

export default meetingsSlice.reducer;
