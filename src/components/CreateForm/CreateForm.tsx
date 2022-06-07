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
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDog } from "../../interfaces/Dogs";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const CreateForm = (): JSX.Element => {
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
  };
  const [formData, setFormData] = useState<IDog>(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const loading = useAppSelector((state) => state.ui.loading);
  const navigate = useNavigate();

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const selectTitle = (event: SelectChangeEvent<string>) => {
    setFormData({
      ...formData,
      title: event.target.value,
    });
  };

  useEffect(() => {
    if (
      formData.age !== 0 &&
      formData.breed !== "" &&
      formData.name !== "" &&
      formData.id !== "" &&
      formData.personality !== "" &&
      formData.picture !== "" &&
      formData.title !== "" &&
      formData.toy !== "" &&
      formData.weight !== ""
    ) {
      setButtonDisabled(false);
      return;
    }

    setButtonDisabled(true);
  }, [
    formData.age,
    formData.breed,
    formData.id,
    formData.name,
    formData.personality,
    formData.picture,
    formData.title,
    formData.toy,
    formData.weight,
  ]);

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const submitRegisterForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    // dispatch(registerUserThunk(formData));
    resetData();
    navigate("/login");
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
          <Typography
            className="create-title"
            component="h1"
            variant="h5"
            sx={{ fontWeight: "bold", fontStyle: "italic", color: "#264653" }}
          >
            Create a new dog!
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
              type="age"
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

            <InputLabel id="title">Title</InputLabel>
            <Select
              labelId="demo-select-small"
              id="title"
              value={formData.title}
              label="Title"
              onChange={selectTitle}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"12"}>Ten</MenuItem>
              <MenuItem value={"20"}>Twenty</MenuItem>
              <MenuItem value={"30"}>Thirty</MenuItem>
            </Select>

            <Button size="small" variant="contained" component="label">
              Upload picture
              <input type="file" hidden />
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
              Create
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreateForm;
