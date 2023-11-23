export default function Tour({ name, info, image, price }) {
  return (
    <div className="single-tour">
      <div className="tour-price">${price}</div>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button className="info-btn delete-btn">not interested</button>
      </div>
    </div>
  );
}
