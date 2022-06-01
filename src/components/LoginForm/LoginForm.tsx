import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LoginCredentials } from "../../interfaces/UserCredential";
import { useAppDispatch } from "../../redux/hooks";
import { loginUserThunk } from "../../redux/thunks/userThunks";

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const formInitialState: LoginCredentials = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState<LoginCredentials>(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (formData.password !== "" && formData.username !== "") {
      setButtonDisabled(false);
      return;
    }

    setButtonDisabled(true);
  }, [formData.username, formData.password]);

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const submitRegisterForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    dispatch(loginUserThunk(formData));
    resetData();
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "none",
          }}
        >
          <div className="avatars-container">
            <Avatar
              src="../../images/doberman.png"
              sx={{
                m: 1,
                height: "100px",
                width: "100px",
              }}
            ></Avatar>
            <Avatar
              src="../../images/dog.png"
              sx={{
                m: 1,
                height: "100px",
                width: "100px",
              }}
            ></Avatar>
            <Avatar
              src="../../images/greyhound.png"
              sx={{
                m: 1,
                height: "100px",
                width: "100px",
              }}
            ></Avatar>
          </div>
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: "bold", fontStyle: "italic", color: "#264653" }}
          >
            Welcome to BarkedIn!
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "none",
            }}
            onSubmit={submitRegisterForm}
          >
            <TextField
              value={formData.username}
              hiddenLabel
              margin="normal"
              required
              name="username"
              label="Username"
              placeholder="Username"
              type="username"
              id="username"
              autoComplete="off"
              onChange={changeData}
            />
            <TextField
              value={formData.password}
              hiddenLabel
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changeData}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="small"
              sx={{ mt: 3, mb: 2 }}
              disabled={buttonDisabled}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <NavLink to="/register" style={{ textDecoration: "none" }}>
                  Not a member? Register here
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
