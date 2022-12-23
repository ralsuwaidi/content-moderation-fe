import { useParams } from 'react-router-dom';
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
    })

  }, [movieSlug]);

  if (movie) {
    return (
        <ImageHeader movie={movie}>
          <div className='h-1/4'>

          </div>

          <BottomPanel movie={movie} />

        </ImageHeader>
    );
  }

}

export default App;
