import React, { useEffect } from "react";
import "./styles/App.scss";
import Header from "./components/Header.jsx";
import Filters from "./components/Filters.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterCard from "./components/CharacterCard.jsx";
import { Routes, Route } from "react-router";

function App() {
  const [characters, setCharacters] = React.useState([]);
  const [searchName, setSearchName] = React.useState("");
  const [filteredHouse, setFilteredHouse] = React.useState("all");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  const houseNames = [
    ...new Set(characters.map((character) => character.house)),
  ];

  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((character) => {
      if (filteredHouse === "all") {
        return true; // Aquí van todos
      } else if (filteredHouse === "") {
        return character.house === ""; // Aquí decimos que van los sin casa por el string vacío
      } else {
        return character.house === filteredHouse; // y aquí el filtro por casa
      }
    });

  return (
    <>
      <Header />
      <div className="magic-particles">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <Routes>
        <Route
          index
          element={
            <>
              <Filters
                psearchName={searchName}
                setSearchName={setSearchName}
                phouseNames={houseNames}
                pfilteredHouse={filteredHouse}
                psetFilteredHouse={setFilteredHouse}
              />
              <CharacterList
                pcharacters={filteredCharacters}
                searchName={searchName}
              />
            </>
          }
        />

        <Route
          path="/character/:name"
          element={<CharacterCard pcharacters={characters} />}
        />
        <Route path="*" element={<h2>No se encuentra el personaje</h2>} />
      </Routes>
    </>
  );
}

export default App;
