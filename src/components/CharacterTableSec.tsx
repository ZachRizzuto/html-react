import { topFive } from "../characters"
import { CharacterRow } from "./rankTable"

export const CharacterTableSection = () => {
	return <>
		<section id="top-characters">
      <h4>Top Characters</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {topFive.map((char, i) => (
            <CharacterRow
              character={char}
              bgColor={i % 2 === 0 ? "dark" : "light"}
              key={char.name}
            />
          ))}
        </tbody>
      </table>
    </section>
	</>
}