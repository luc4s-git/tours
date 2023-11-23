export default function Tour({ id, name, info, image, price, deleteTour }) {
  return (
    <article className="single-tour">
      <img src={image} alt={name + 'tour'} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button
          type="buton"
          className="btn btn-block delete-btn"
          onClick={() => deleteTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
}
