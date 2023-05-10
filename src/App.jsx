import "./index.css";
import { useState } from 'react';
//import {characters as charactersList} from "./assets/data";
import CharactersList from "./components/CharacterList";
import characters from "./assets/data.json";
function App() {
  console.log(characters);
 /* const [characters, setCharacters] = useState(charactersList);
  const handleAddCharacter = (newCharacter) => {
    setCharacters([
      ...characters,
      newCharacter
    ])
  }*/
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Wubba lubba dub dub!</h2>
      <div className="container">
        <CharactersList characters={characters} />
      </div>
    </div>
  );
}

export default App;