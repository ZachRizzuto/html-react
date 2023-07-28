import { Character } from "../types";

export const CharacterCard = ({ character: {name, nickName, imageUrl, background} }: { character: Character}) => {
  return (
    <>
      <div className="card">
        <div className="card-titles">
          <h3>{name}</h3>
          <h4>{nickName}</h4>
        </div>
        <img src={imageUrl} alt="character image" />
        <p>{background}</p>
      </div>
    </>
  );
};
