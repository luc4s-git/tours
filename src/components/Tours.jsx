import { useState } from 'react';
import Tour from './Tour';

// Responsável por renderizar a lista de componentes

export default function Tours({ data }) {
  const [tours, setTours] = useState(data);

  const toursMapping = tours.map((tour) => {
    return (
      <div className="single-tour" key={tour.id}>
        <Tour
          key={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
        ></Tour>
      </div>
    );
  });

  return <div className="tours">{toursMapping}</div>;
}
