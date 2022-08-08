import * as React from "react";
import styled from "styled-components";
import { CircularProgress, Stack } from "@mui/material";

const StyledLoadingBarLinear = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  justify-content: center;
  padding: 0;
  margin: 0;
  align-items: center;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const LoadingBarLinear = (): JSX.Element => {
  return (
    <StyledLoadingBarLinear>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress size={200} color="secondary" />
      </Stack>
    </StyledLoadingBarLinear>
  );
};
