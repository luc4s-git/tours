import { useState } from 'react';

export default function Tour({ id, name, info, image, price, deleteTour }) {
  const [readMore, setReadMore] = useState(true);
  const [isFull, setIsFull] = useState(false);
  const [textInfo, setTextInfo] = useState(info);

  const ShowReadMore = () => {
    return (
      <>
        <button
          type="button"
          className="info-btn"
          onClick={() => {
            setReadMore(!readMore);
            setIsFull(!isFull);
          }}
        >
          read more
        </button>
      </>
    );
  };

  const ShowText = () => {
    if (!isFull) {
      setTextInfo(info.slice(0, 200));
    }

    if (isFull) {
      setTextInfo(info);
    }

    return <p>{textInfo}</p>;
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name + 'tour'} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <ShowText />
        <ShowReadMore />
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
