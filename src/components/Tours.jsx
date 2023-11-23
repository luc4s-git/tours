import { useState } from 'react';
import Tour from './Tour';

export default function Tours({ data }) {
  const [tours, setTours] = useState(data);

  const toursMapping = tours.map((tour) => {
    return <Tour key={tour.id} {...tour}></Tour>;
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
