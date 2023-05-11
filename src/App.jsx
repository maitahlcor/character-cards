import "./index.css";
import CharactersList from "./components/CharacterList";
import characters from "./assets/data.json";
function App() {
  console.log(characters);

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