import { ClassNames } from "@emotion/react";
import {
  Box,
  TextField,
} from "@mui/material";
import theme from "../../theme";

const DropDown = ({ type, handleChange, types }) => {
  return (
    <Box mt={3} theme={theme} variant="drop">
      <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth></TextField>
    </Box>
  );
};

export default DropDown;
