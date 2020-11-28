export default ({ ability, name, imgSet, id }) => {
  return (
    <div className="card">
      <span className="card-ability-tag">{ability.tag}</span>
      <div className="image-container">
        <img
          className="card-image"
          src={`https://robohash.org/${id}?set=set${imgSet}&size=150x150`}
        />
      </div>
      <span className="card-name">{name}</span>
      <span className="card-quirk">{ability.ability}</span>
    </div>
  );
};
