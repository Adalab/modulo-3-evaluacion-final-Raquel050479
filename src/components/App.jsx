// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';

import '../styles/App.scss';
import getDataFromApi from '../services/api';
import MovieSceneList from './MovieSceneList';

//import Filters from './Filters';

const App = () => {
  // Estados

  const [resultApi, setResultApi] = useState([]);
  const [nameMovie, setNameMovie] = useState('');
  const [yearMovie, setYearMovie] = useState('');

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setResultApi(cleanData);
    });
  }, []);

  return (
    <div >
      <header className='header'>
        <h1 className='header__title'>Owen Wilson's "wow"</h1>
      </header>
      <main className='main'>
        <MovieSceneList resultApi={resultApi}/>
      </main>
    </div>
  );
};

export default App;
