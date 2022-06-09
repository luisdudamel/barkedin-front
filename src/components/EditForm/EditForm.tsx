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
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IDog } from "../../interfaces/Dogs";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { editFavDogThunk } from "../../redux/thunks/dogsThunks";

const EditForm = (): JSX.Element => {
  const { id } = useParams();
  const username = useAppSelector((state) => state.user.username);
  const currentDog = useAppSelector((state) => state.dogs);
  const currentDogId = currentDog.find((dog) => dog.id === id);

  const dispatch = useAppDispatch();
  const formInitialState: IDog = {
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
  };
  const [formData, setFormData] = useState<IDog>(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const loading = useAppSelector((state) => state.ui.loading);

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

  const submitEdit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const newDogFormData = new FormData();
    newDogFormData.append("username", JSON.stringify(username));
    newDogFormData.append("dogIdToEdit", id as string);
    newDogFormData.append("updatedDog", JSON.stringify(formData));
    newDogFormData.append("picture", formData.picture);

    dispatch(editFavDogThunk(newDogFormData, id));
    resetData();
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
                required
                name="age"
                label="Age"
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
                id="breed"
                onChange={changeData}
              />
              <TextField
                className="create-input"
                value={formData.weight}
                hiddenLabel
                margin="normal"
                required
                name="weight"
                label="Weight"
                type="weight"
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
                  defaultValue=""
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
      </Container>
    </>
  );
};

export default EditForm;
