import { useState, useEffect } from "react";
import theme from "./theme";
// import { Header } from "./components/Header"
import { CardMovie, DropDown } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { Container ,Typography} from "@mui/material";
import { get } from "./services";


import Header from './components/Header';

import './App.css';

function App() {
  const [type, setType] = useState("");

  const [types, setTypes] = useState([]);

  const [entries, setEntries] = useState([]);


  async function getTypes() {
    const entries = await get("title");
    setEntries(entries);
    console.log("entries",entries)
  }


  const handleChange = (event) => {
    setType(event.target.value);
    getPokemons(event.target.value);
  };

  useEffect(() => {
    // llamo a la funciona
    getTypes();
  }, []);

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <Header/>
        <Container>
          <DropDown type={type} handleChange={handleChange} types={types} />
          <Typography color={"white"} variant="h4">Popular Movie</Typography>
          <CardMovie entries={entries} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
