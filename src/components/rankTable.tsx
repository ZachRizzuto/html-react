import { Component } from "react";
import { Character } from "../types";

type RowProps = {
  character: Character,
  bgColor: string;
};

export class CharacterRow extends Component <RowProps> {
  render() {
		const { character: { name, skillset, votes }, bgColor } = this.props;

		return (
			<>
				<tr className={bgColor}>
					<td>{name}</td>
					<td>{skillset.join(", ")}</td>
					<td>{votes}</td>
				</tr>
			</>
		);
	}
}
