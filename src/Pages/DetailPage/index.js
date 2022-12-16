import { Link, useParams } from 'react-router-dom';
import './App.css';
import movieData from '../../data';
import BottomPanel from './Information/BottomPanel';
import ImageHeader from './ImageHeader';

function App() {
  let { movieId } = useParams();
  const movie = movieData.find((obj) => obj.id === movieId);
  const poster = movie.image


  return (
    <div className={`App`}>
          <ImageHeader poster={poster}>
        <div className='h-2/3'>

        </div>

        <BottomPanel movie={movie} />

        </ImageHeader>
    </div>
  );
}

export default App;
