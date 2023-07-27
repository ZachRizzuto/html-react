import { Component } from "react";

type RowProps = {
  name: string;
  skillset: string[];
  vote: number;
  bgColor: string;
};

export class CharacterRow extends Component <RowProps> {
  render() {
		const {name, skillset, vote, bgColor} = this.props;

		return (
			<>
				<tr className={bgColor}>
					<td>{name}</td>
					<td>{skillset.join(", ")}</td>
					<td>{vote}</td>
				</tr>
			</>
		);
	}
}
