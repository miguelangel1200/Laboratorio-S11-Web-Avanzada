import { useState, useEffect } from "react";
import { CardPokemons, DropDown } from "../../components";
// import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { get } from "../../services";


import Header from '../../components/Header';

import './App.css';

const Home = () => {
  const [type, setType] = useState("");

  const [types, setTypes] = useState([]);

  const [pokemons, setPokemons] = useState([]);

  async function getTypes() {
    const types = await get("type");
    setTypes(types.results);
  }

  async function getPokemons(url) {
    const id = url.split("/");
    const pokemons = await get(`type/${id[id.length - 2]}`);
    setPokemons(pokemons.pokemon);
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
        <Container>
          <Header/>
          <DropDown type={type} handleChange={handleChange} types={types} />
          <CardPokemons pokemons={pokemons} />
        </Container>
    </div>
  );
}

export default Home;
