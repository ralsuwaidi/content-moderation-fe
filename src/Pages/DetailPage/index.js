import { Link, useParams } from 'react-router-dom';
import './App.css';
import movieData from '../../data';
import BottomPanel from './Information/BottomPanel';

function App() {
  let { movieId } = useParams();
  const movie = movieData.find((obj) => obj.id === movieId);


  return (
    <div className={`App`}>
      <div className={`w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('https://www.criticsinc.com/photos/movieposters/l/lightyear.jpg')]`}>
        <div className='h-2/3'>
          <Link to="/list">About</Link>

        </div>

        <BottomPanel movie={movie} />

      </div>
    </div>
  );
}

export default App;
