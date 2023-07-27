type RowProps = {
	name: string,
	skillset: string[],
	vote: number,
	bgColor: string,
}

export const CharacterRow = ({name, skillset, vote, bgColor}: RowProps) => {
			return <>
				<tr className={bgColor}>
					<td>{name}</td>
					<td>{skillset.join(', ')}</td>
					<td>{vote}</td>
				</tr>
			</>
	}