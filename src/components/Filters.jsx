import PropTypes from "prop-types";

Filters.propTypes = {
  psearchName: PropTypes.string.isRequired,
  setSearchName: PropTypes.func.isRequired,
  phouseNames: PropTypes.array.isRequired,
  pfilteredHouse: PropTypes.string.isRequired,
  psetFilteredHouse: PropTypes.func.isRequired,
};

function Filters({
  psearchName,
  setSearchName,
  phouseNames,
  pfilteredHouse,
  psetFilteredHouse,
}) {
  const handleName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.target.value);
  };

  const handleHouse = (ev) => {
    ev.preventDefault();
    psetFilteredHouse(ev.target.value);
  };

  return (
    <form className="search-inputs" onSubmit={(ev) => ev.preventDefault()}>
      <label className="character-search">Búsqueda por personaje</label>
      <input
        type="search"
        autoComplete="off"
        placeholder="Escribe aquí el nombre"
        value={psearchName}
        onChange={handleName}
      />

      <label className="house-select">Búsqueda por casa</label>
      <select
        className="form-select"
        value={pfilteredHouse}
        onChange={handleHouse}
      >
        <option value="all">Todas las casas</option>
        {phouseNames.map((house, index) => (
          <option key={index} value={house}>
            {house ? house : "Sin casa"}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Filters;
