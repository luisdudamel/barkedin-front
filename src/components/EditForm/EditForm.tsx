import { LoadingButton } from "@mui/lab";
import {
  Button,
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Snackbar,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IDog } from "../../interfaces/Dogs";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { editFavDogThunk } from "../../redux/thunks/dogsThunks";
import { LoadingBarLinear } from "../LoadingBarLinear/LoadingBarLinear";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const EditForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const username = useAppSelector((state) => state.user.username);
  const currentDog = useAppSelector((state) => state.dogs);
  const currentDogId = currentDog.find((dog) => dog.id === id);

  const dispatch = useAppDispatch();
  const formInitialState: IDog = {
    name: currentDogId?.name || "",
    age: currentDogId?.age || 0,
    breed: currentDogId?.breed || "",
    id: currentDogId?.id || "",
    personality: currentDogId?.personality || "",
    picture: currentDogId?.picture || "",
    title: currentDogId?.title || "",
    toy: currentDogId?.toy || "",
    weight: currentDogId?.weight || "",
    bio: currentDogId?.bio || "",
  };
  const [formData, setFormData] = useState<IDog>(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const loading = useAppSelector((state) => state.ui.loading);

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
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const selectTitle = (event: SelectChangeEvent<string>) => {
    setFormData({
      ...formData,
      title: event.target.value,
      personality: event.target.value.includes("Calm")
        ? event.target.value.split(" ")[1]
        : event.target.value.split(" ")[0],
    });
  };
  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || " ",
    });
  };

  useEffect(() => {
    if (
      formData.age !== 0 &&
      formData.breed !== "" &&
      formData.name !== "" &&
      formData.toy !== "" &&
      formData.bio !== "" &&
      formData.weight !== ""
    ) {
      setButtonDisabled(false);
      return;
    }

    setButtonDisabled(true);
  }, [
    formData.age,
    formData.bio,
    formData.breed,
    formData.name,
    formData.toy,
    formData.weight,
  ]);

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const submitEdit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const newDogFormData = new FormData();
    newDogFormData.append("username", JSON.stringify(username));
    newDogFormData.append("dogIdToEdit", id as string);
    newDogFormData.append("updatedDog", JSON.stringify(formData));
    newDogFormData.append("picture", formData.picture || " ");

    dispatch(editFavDogThunk(newDogFormData, id));
    resetData();
    handleClick();
    setTimeout(() => navigate("/profile"), 3000);
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      {loading && <LoadingBarLinear />}
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
          <FormControl>
            <Typography
              className="create-title"
              component="h1"
              variant="h5"
              sx={{ fontWeight: "bold", fontStyle: "italic", color: "#264653" }}
            >
              Edit {currentDogId?.name}
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
              onSubmit={submitEdit}
            >
              <TextField
                className="create-input"
                value={formData.name}
                hiddenLabel
                margin="normal"
                required
                type="name"
                label="Dog name"
                id="name"
                name="name"
                autoComplete="off"
                autoFocus
                onChange={changeData}
              />
              <TextField
                className="create-input"
                value={formData.age}
                hiddenLabel
                margin="normal"
                inputProps={{ min: "0" }}
                required
                name="age"
                label="Age (in years)"
                placeholder="Age"
                type="number"
                id="age"
                autoComplete="off"
                onChange={changeData}
              />
              <TextField
                className="create-input"
                value={formData.breed}
                hiddenLabel
                margin="normal"
                required
                name="breed"
                label="Breed"
                type="breed"
                autoComplete="off"
                id="breed"
                onChange={changeData}
              />
              <TextField
                className="create-input"
                value={formData.weight}
                hiddenLabel
                margin="normal"
                required
                inputProps={{ maxLength: 3 }}
                name="weight"
                label="Weight (in kg)"
                type="weight"
                id="weight"
                autoComplete="off"
                onChange={changeData}
              />
              <TextField
                className="create-input"
                value={formData.toy}
                hiddenLabel
                margin="normal"
                required
                autoComplete="off"
                name="toy"
                label="Favorite toy"
                type="toy"
                id="toy"
                onChange={changeData}
              />
              <FormControl sx={{ mt: "20px" }} fullWidth>
                <InputLabel id="title">Title*</InputLabel>

                <Select
                  required
                  labelId="title"
                  id="title"
                  value={formData.title}
                  label="Title"
                  onChange={selectTitle}
                >
                  <MenuItem value={""}>
                    <em>--</em>
                  </MenuItem>
                  <MenuItem value={"Ball Player"}>Ball Player</MenuItem>
                  <MenuItem value={"Beach Lover"}>Beach Lover</MenuItem>
                  <MenuItem value={"Frisbee Player"}>Frisbee Player</MenuItem>
                  <MenuItem value={"Nature Explorer"}>Nature Explorer</MenuItem>
                  <MenuItem value={"Calm Walker"}>Calm Walker</MenuItem>
                </Select>
                <TextField
                  margin="normal"
                  id="bio"
                  label="Bio"
                  multiline
                  autoComplete="off"
                  rows={4}
                  value={formData.bio}
                  onChange={changeData}
                />
              </FormControl>

              <Button
                sx={{ mt: "30px" }}
                fullWidth
                size="small"
                variant="contained"
                component="label"
              >
                Upload picture
                <input type="file" hidden id="picture" onChange={uploadImage} />
              </Button>
              <LoadingButton
                className="create-input"
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
                size="small"
                sx={{ mt: 3, mb: 2 }}
                disabled={buttonDisabled}
              >
                Edit {currentDogId?.name}
              </LoadingButton>
            </Box>
          </FormControl>
        </Box>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {formData.name} succesfully edited!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default EditForm;
