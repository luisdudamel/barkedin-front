import { Grid } from "@mui/material";
import { Dog } from "../../interfaces/Dogs";

interface Props {
  dogs: Dog[];
}

export const DogList = ({ dogs }: Props): JSX.Element => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {dogs.map((dog) => {
          return (
            <Grid textAlign={"center"} item xs={12} sm={6} key={dog.name}>
              {dog.name}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
