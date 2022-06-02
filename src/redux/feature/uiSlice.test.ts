import { Loading } from "../../interfaces/uiFeedback";
import uiSliceReducer, { loadingActionCreator } from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its invoked with the loading status 'true'", () => {
    test("Then it should return the same object with the loading status set to 'true'", () => {
      const expectedLoadingStatus = true;
      const mockLoading: Loading = {
        loading: true,
      };

      const loadingAction = loadingActionCreator(mockLoading);
      const loadingStatusTrue = uiSliceReducer(mockLoading, loadingAction);

      expect(loadingStatusTrue.loading).toBe(expectedLoadingStatus);
    });
  });
});
