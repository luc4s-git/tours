import { useState } from 'react';
import Tour from './Tour';

export default function Tours({ tours, deleteTour, reFetchData }) {
  const [title, setTitle] = useState('our tours');

  const toursMapping = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>;
  });

  return (
    <section>
      <div className="title">
        <h2>{title}</h2>
        <div className="title-underline"></div>
        <div className="tours">{toursMapping}</div>
      </div>
    </section>
  );
}
