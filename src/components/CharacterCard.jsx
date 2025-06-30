import { useParams, Link } from "react-router";

function CharacterCard({ pcharacters }) {
  const params = useParams();
  const name = params.name;

  const character = pcharacters.find((item) => item.name === name);

  return (
    <div className="character-card-link">
      <h1>Tarjeta de personaje</h1>
      {character ? (
        <>
          <img
            className="character-card-link__image"
            src={character.image || "./images/placeholder.png"}
            alt={character.name}
          />
          <div className="character-card-link__info">
            <h3 className="character-card-link__name">{character.name}</h3>
            <p className="character-card-link__house">
              Casa: {character.house || "Sin casa"}
            </p>
            <p className="character-card-link__species">
              Especie: {character.species}
            </p>
            <p className="character-card-link__birth">
              Nacimiento: {character.dateOfBirth}
            </p>
          </div>
          <Link to="/" className="back-button">
            ← Volver al listado
          </Link>
        </>
      ) : (
        <p>Personaje no encontrado</p>
      )}
    </div>
  );
}

export default CharacterCard;
