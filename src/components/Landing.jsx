import Filters from "./Filters";
import CharacterList from "./CharacterList";
import filteredCharacters from "../data/filteredCharacters";

function Landing(psearchName, setSearchName, houseNames,
  filteredHouse,
  setFilteredHouse
) {
  return (
    <>
      <Filters
        psearchName={psearchName}
        setSearchName={setSearchName}
        phouseNames={houseNames}
        pfilteredHouse={filteredHouse}
        psetFilteredHouse={setFilteredHouse}
      />
      <CharacterList pcharacters={filteredCharacters} />
    </>
  );
}

export default Landing;
