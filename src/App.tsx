import "./App.css";
import "./Character.css";
import { Header } from "./header.tsx";
import { CharacterTableSection } from "./components/CharacterTableSec.tsx";
import { CharacterCardSection } from "./components/CharacterCardSection.tsx";

function App() {
  return (
    <>
      <Header />
      <CharacterTableSection />
      <CharacterCardSection />
    </>
  );
}

export default App;
