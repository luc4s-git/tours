export default function Tour({ id, name, info, image, price }) {
  return (
    <article className="single-tour">
      <img src={image} alt={name + 'tour'} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <button
        className="info-btn delete-btn"
        style={{ width: '100%', borderRadius: '3px' }}
        onClick={(e) => console.log(e.target)}
      >
        remove
      </button>
    </article>
  );
}
