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
  },
});

export const { loadAllMeetings: loadAllMeetingsActionCreator } =
  meetingsSlice.actions;

export default meetingsSlice.reducer;
