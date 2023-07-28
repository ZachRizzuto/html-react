import { CharacterCard } from "./Character"
import { characterData } from "../characters"

export const CharacterCardSection = () => <>
	<section id="character-cards">
		{characterData.map((char) => (
			<CharacterCard character={char} key={char.name} />
		))}
	</section>
</>