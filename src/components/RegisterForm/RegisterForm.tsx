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
import { UserCredential } from "../../interfaces/UserCredential";
import { useAppDispatch } from "../../redux/hooks";
import { registerUserThunk } from "../../redux/thunks/userThunks";

const RegisterForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const formInitialState: UserCredential = {
    name: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState<UserCredential>(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (
      formData.username !== "" &&
      formData.password !== "" &&
      formData.name !== ""
    ) {
      setButtonDisabled(false);
      return;
    }

    setButtonDisabled(true);
  }, [formData.name, formData.password, formData.username]);

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const submitRegisterForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    dispatch(registerUserThunk(formData));
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
              value={formData.name}
              hiddenLabel
              margin="normal"
              required
              type="name"
              label="Name"
              id="name"
              name="name"
              autoComplete="off"
              autoFocus
              onChange={changeData}
            />
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
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  Already have an account? Log in here
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegisterForm;
