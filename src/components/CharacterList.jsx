import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CharactersList = ({ characters = [] }) => {
  return (
    <div className="character-list">
        {characters.map((character) => (
        <div key={character.id} className="character-list__item">
          <CharacterCard
            name = {character.name} 
            status = {character.status} 
            species = {character.species} 
            origin = {character.origin} 
            location= {character.location} 
            image = {character.image}
          />
        </div>
      ))}
    </div>
  )

};

export default CharactersList;

CharactersList.propTypes = {
  data: PropTypes.array
};
