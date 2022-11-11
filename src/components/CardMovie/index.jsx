import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import './cardpokemons.css'

const CardMovie = ({ entries }) => {
  return (
    <Box>
      <Grid container spacing={2} mt={3}>
        {entries.length > 0 &&
          entries.map((entries) => (
            <Grid item xs={12} sm={2.4}>
              <Card>
                <CardMedia
                  component="img"
                  width={200}
                  height={400}
                  image={entries.images.posterArt.url}
                />
                <CardContent>
                  <Typography variant="h8">{entries.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardMovie;
