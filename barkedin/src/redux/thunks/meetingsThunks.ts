import axios from "axios";
import { loadAllMeetingsActionCreator } from "../feature/meetingsSlice";
import { loadingActionCreator } from "../feature/uiSlice";
import { AppDispatch } from "../store";

export const getAllMeetingsThunk = () => async (dispatch: AppDispatch) => {
  const currentToken = localStorage.getItem("token");
  dispatch(loadingActionCreator({ loading: true }));
  try {
    const {
      data: { meetings: allMeetings },
    } = await axios.get(`${process.env.REACT_APP_API_URL_DEV}meetings`, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });
    dispatch(loadAllMeetingsActionCreator(allMeetings));
  } catch (error) {
    dispatch(loadingActionCreator({ loading: false }));
  }
  dispatch(loadingActionCreator({ loading: false }));
};
