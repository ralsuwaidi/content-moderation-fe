import { useParams } from 'react-router-dom';
import './App.css';
import BottomPanel from './Information/BottomPanel';
import ImageHeader from './ImageHeader';
import API from "../../Common/api.js";
import { useEffect, useState } from "react";

function App() {
  let { movieSlug } = useParams();
  const [movie, setMovie] = useState()

  useEffect(() => {
    API.get('movie/',).then((data) => {
      const movies = data.data

      const movie = movies.find((obj) => obj.slug === movieSlug);
      setMovie(movie)
      console.log(movie)
    })

  }, [movieSlug]);

  if (movie) {
    return (
      <div className={`App`}>
        <ImageHeader movie={movie}>
          <div className='h-2/4'>

          </div>

          <BottomPanel movie={movie} />

        </ImageHeader>
      </div>
    );
  }

}

export default App;
