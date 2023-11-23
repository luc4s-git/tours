export default function Tour({ name, info, image, price }) {
  return (
    <>
      <img src={image} alt={name + "tour."} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <div className="tour-price">U$ {price}</div>
      <button className="delete-btn">delete</button>
    </>
  );
}
