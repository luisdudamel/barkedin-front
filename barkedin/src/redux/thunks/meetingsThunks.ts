import axios from "axios";
import { loadAllMeetingsActionCreator } from "../feature/meetingsSlice";
import { AppDispatch } from "../store";

export const getAllMeetingsThunk = () => async (dispatch: AppDispatch) => {
  const {
    data: { meetings: allMeetings },
  } = await axios.get(`${process.env.REACT_APP_API_URL_DEV}meetings`);

  dispatch(loadAllMeetingsActionCreator(allMeetings));
};
