import { useState } from 'react';
import Tour from './Tour';

export default function Tours({ tours, deleteTour }) {
  const toursMapping = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>;
  });

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
        <div className="tours">{toursMapping}</div>
      </div>
    </section>
  );
}
