import { useState } from 'react';

export default function Tour({ id, name, info, image, price, deleteTour }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const [tourInfo, setTourInfo] = useState(isReadMore && info.slice(0, 200));

  return (
    <article className="single-tour">
      <img src={image} alt={name + 'tour'} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{tourInfo}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => {
            setTourInfo(info);
            setIsReadMore(false);
          }}
        >
          read more
        </button>
        <button
          type="buton"
          className="btn btn-block delete-btn"
          onClick={() => {
            deleteTour(id);
          }}
        >
          not interested
        </button>
      </div>
    </article>
  );
}
