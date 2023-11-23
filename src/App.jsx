import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const reFetchData = () => {
    setTours([]);
    setIsLoading(!isLoading);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <Tours
            tours={tours}
            deleteTour={deleteTour}
            reFetchData={reFetchData}
          ></Tours>
        </>
      )}
    </main>
  );
};
export default App;
