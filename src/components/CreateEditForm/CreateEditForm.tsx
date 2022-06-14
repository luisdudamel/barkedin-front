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
  Alert,
} from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IDog } from "../../interfaces/Dogs";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  createFavDogThunk,
  editFavDogThunk,
} from "../../redux/thunks/dogsThunks";
import { LoadingBarLinear } from "../LoadingBarLinear/LoadingBarLinear";

interface Props {
  id?: string;
}

const CreateEditForm = ({ id }: Props): JSX.Element => {
  const navigate = useNavigate();

  const username = useAppSelector((state) => state.user.username);

  const dispatch = useAppDispatch();
  const currentDog = useAppSelector((state) => state.dogs);
  const currentDogId = currentDog.find((dog) => dog.id === id);

  const formInitialState: IDog = useMemo(() => {
    return {
      name: "",
      age: 0,
      breed: "",
      id: "",
      personality: "",
      picture: "",
      title: "",
      toy: "",
      weight: "",
      bio: "",
      owner: "",
      picturebackup: "",
    };
  }, []);

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

  useEffect(() => {
    if (id) {
      setFormData(currentDogId || formInitialState);
    }
  }, [currentDogId, formInitialState, id]);

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
      [event.target.id]: event.target.files?.[0] || "",
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

  const submitCreate = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const newDogFormData = new FormData();
    newDogFormData.append("username", JSON.stringify(username));
    newDogFormData.append("newDog", JSON.stringify(formData));

    newDogFormData.append(
      "picture",
      formData.picture === "" ? "no-picture" : formData.picture
    );

    if (id) {
      dispatch(editFavDogThunk(newDogFormData, id));
    } else {
      dispatch(createFavDogThunk(newDogFormData));
    }
    resetData();
    handleClick();
    setTimeout(() => navigate("/profile"), 3000);
  };

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
              {id ? `Edit ${currentDogId?.name}` : "Create a new dog!"}
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
              onSubmit={submitCreate}
            >
              <TextField
                className="create-input"
                value={formData.name}
                hiddenLabel
                margin="normal"
                inputProps={{ maxLength: 10 }}
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
                required
                name="age"
                inputProps={{ min: "0" }}
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
                autoComplete="off"
                required
                name="breed"
                label="Breed"
                type="breed"
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
                autoComplete="off"
                id="weight"
                onChange={changeData}
              />
              <TextField
                className="create-input"
                value={formData.toy}
                hiddenLabel
                margin="normal"
                required
                name="toy"
                label="Favorite toy"
                autoComplete="off"
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
                {id ? `Edit ${currentDogId?.name}` : "Create"}
              </LoadingButton>
            </Box>
          </FormControl>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%", backgroundColor: "#2A9D8F", color: "white" }}
            >
              {id
                ? `${currentDogId?.name} succesfully edited!`
                : "New dog created!"}
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </>
  );
};

export default CreateEditForm;
