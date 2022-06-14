import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Avatar,
  Box,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginCredentials } from "../../interfaces/UserCredential";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUserThunk } from "../../redux/thunks/userThunks";

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const formInitialState: LoginCredentials = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState<LoginCredentials>(formInitialState);

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const loading = useAppSelector((state) => state.ui.loading);
  const navigate = useNavigate();
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
    navigate("/home");
  };

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const submitLoginForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const message = await dispatch(loginUserThunk(formData));

    resetData();
    if (message) {
      handleClick();
      return;
    }
    setTimeout(() => navigate("/home"), 3000);
  };

  return (
    <>
      <Container className="form-container" component="main" maxWidth="lg">
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
            className="login-title"
            component="h1"
            variant="h5"
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#264653",
            }}
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
            onSubmit={submitLoginForm}
          >
            <TextField
              className="login-input"
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
              className="login-input"
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
              loading={loading}
              type="submit"
              fullWidth
              variant="contained"
              size="small"
              sx={{ mt: 3, mb: 2 }}
              disabled={buttonDisabled}
            >
              Login
            </LoadingButton>

            <Grid style={{ justifyContent: "center" }} container>
              <Grid item>
                <NavLink
                  className={"form-link"}
                  to="/register"
                  style={{ textDecoration: "none" }}
                >
                  Not a member? Register here
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%", backgroundColor: "#F4A261", color: "white" }}
        >
          Username/password is wrong
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginForm;
