import placeholder from "../images/placeholder.png";
import PropTypes from "prop-types";
import { Link } from "react-router";

CharacterList.propTypes = {
  pcharacters: PropTypes.array.isRequired,
};

function CharacterList({ pcharacters, searchName }) {
  if (pcharacters.length === 0) {
    return (
      <main className="main-container">
        <section className="characters-list">
          <p className="no-results">
            ¡Lo siento! No encontramos al mago de nombre "{searchName}"
          </p>
        </section>
      </main>
    );
  }
  return (
    <main className="main-container">
      <section className="characters-list">
        <ul className="characters-list__ul">
          {pcharacters.map((character, index) => (
            <li key={index} className="character-card">
              <Link to={"/character/" + character.name}>
                <img
                  className="character-img"
                  src={
                    character.image && character.image.trim() !== ""
                      ? character.image
                      : placeholder
                  }
                  alt={character.name}
                />
                <h2 className="character-name">{character.name}</h2>
                <p className="character-house">
                  {character.house || "Sin casa"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default CharacterList;
