import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import './cardpokemons.css'

const CardPokemons = ({ pokemons }) => {
  return (
    <Box>
      <Grid container spacing={3} mt={3}>
        {pokemons.length > 0 &&
          pokemons.map(({ pokemon }) => (
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia
                  className="cardmedia"
                  component="img"
                  width={200}
                  height={300}
                  image={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    pokemon.url.split("/")[6]
                  }.svg`}
                />
                <CardContent>
                  <Typography variant="h5">{pokemon.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardPokemons;
