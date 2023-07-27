type CharacterProps = {
  name: string;
  nickName: string | null;
  desc: string;
  img: string;
};

export const Character = ({ name, nickName, desc, img }: CharacterProps) => {
  return (
    <>
      <div className="card">
        <div className="card-titles">
          <h3>{name}</h3>
          <h4>{nickName}</h4>
        </div>
        <img src={img} alt="character image" />
        <p>{desc}</p>
      </div>
    </>
  );
};
