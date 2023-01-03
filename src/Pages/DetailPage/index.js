import { useParams } from 'react-router-dom';
import BottomPanel from './Information/BottomPanel';
import ImageHeader from './ImageHeader';
import API from "../../Common/api.js";
import { useEffect, useState } from "react";

function App() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState()

  useEffect(() => {
    API.get('movies/' + movieId + "?populate=*",).then((data) => {
      const movie = data.data.data.attributes
      console.log(movie)

      setMovie(movie)
    })

  }, [movieId]);

  if (movie) {
    return (
        <ImageHeader movie={movie}>
         

          <BottomPanel movie={movie} />

        </ImageHeader>
    );
  }

}

export default App;
