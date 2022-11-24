import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes";

const App = () => {
  
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
