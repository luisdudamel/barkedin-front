import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserCredential } from "../../interfaces/UserCredential";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
  const loading = useAppSelector((state) => state.ui.loading);
  const navigate = useNavigate();
  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const [snackMessage, setSnackMessage] = useState("");

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

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    navigate(
      `${snackMessage === "User created succesfully" ? "/login" : "/register"}`
    );
  };

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const submitRegisterForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const message = await dispatch(registerUserThunk(formData));
    resetData();

    if (message) {
      setSnackMessage(message);
      handleClick();
      return;
    } else {
      setSnackMessage("User created succesfully");
      handleClick();
      setTimeout(() => navigate("/home"), 3000);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
        >
          <div className="avatars-container">
            <Avatar
              src="../../images/doberman.webp"
              alt="Doberman avatar icon"
              sx={{
                m: 1,
                height: "100px",
                width: "100px",
              }}
            ></Avatar>
            <Avatar
              src="../../images/dog.webp"
              alt="Husky avatar icon"
              sx={{
                m: 1,
                height: "100px",
                width: "100px",
              }}
            ></Avatar>
            <Avatar
              src="../../images/greyhound.webp"
              alt="Greyhound avatar icon"
              sx={{
                m: 1,
                height: "100px",
                width: "100px",
              }}
            ></Avatar>
          </div>
          <Typography
            className="register-title"
            component="h1"
            variant="h5"
            sx={{ fontWeight: "bold", fontStyle: "italic", color: "#264653" }}
          >
            Create your account!
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
              className="register-input"
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
              className="register-input"
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
              className="register-input"
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

            <LoadingButton
              className="register-input"
              loading={loading}
              type="submit"
              fullWidth
              variant="contained"
              size="small"
              sx={{ mt: 3, mb: 2 }}
              disabled={buttonDisabled}
            >
              Register
            </LoadingButton>
            <Grid style={{ justifyContent: "center" }} container>
              <Grid item>
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  Already have an account? Log in here
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", backgroundColor: "#2A9D8F", color: "white" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegisterForm;
