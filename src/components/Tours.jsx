import { useState } from 'react';
import Tour from './Tour';
import { IoMdRefresh } from 'react-icons/io';

export default function Tours({ tours, deleteTour, reFetchData }) {
  const toursMapping = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>;
  });

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
        <div className="tours">{toursMapping}</div>
        <IoMdRefresh
          style={{ cursor: 'pointer', height: '10rem', width: '10rem' }}
          onClick={() => {
            reFetchData();
          }}
        />
      </div>
    </section>
  );
}
