import CharacterCard from "./components/CharacterCard";

import {characters as characterList} from "./assets/data.jason";

import "./styles.css";
const [contacts, setContacts] = useState(characterList);
function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        <CharacterCard {contacts}/>
      </div>
    </div>
  );
}

export default App;
