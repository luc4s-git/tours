import { useState } from "react";
import Tour from "./Tour";

export default function Tours({ data }) {
  const [tours, setTours] = useState(data);

  const toursMapping = tours.map((tour, index) => {
    const { id, name, info, image, price } = tour;

    return (
      <div className="single-tour" key={id}>
        <Tour name={name} info={info} image={image} price={price} />
      </div>
    );
  });

  return <div className="tours">{toursMapping}</div>;
}
