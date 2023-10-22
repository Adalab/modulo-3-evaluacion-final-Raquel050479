// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';

import '../styles/App.scss';
import getDataFromApi from '../services/api';
import MovieSceneList from './MovieSceneList';
import ls from '../services/localStorage';
import Filters from './Filters';

const App = () => {
  const [resultApi, setResultApi] = useState(ls.get('resultApi', []));
  const [nameMovie, setNameMovie] = useState('');
  const [yearMovie, setYearMovie] = useState('');

  useEffect(() => {
    //const dataLs = ls.get('resultApi', null);
    if (resultApi.length === 0) {
      getDataFromApi().then((cleanData) => {
        setResultApi(cleanData);
        ls.set('resultApi', cleanData);
      });
    }
  }, []);

  const handleChange = (value) => {
    setNameMovie(value);
  };

  const handleSelect = (value) => {
    setYearMovie(value);
  };

  const filteredScenes = resultApi
    .filter((scene) => scene.movie.toLowerCase().includes(nameMovie))
    .filter((item) => {
      if (yearMovie === ''){
        return true;
      }else{
        return yearMovie.includes(item.year);
      }
    })
    ;

  /*const filteredByYear = resultApi.filter((scene) => yearMovie ? scene.year === parseInt(yearMovie) : true); */

  const getYears = () => {
    const years = resultApi.map((scene) => scene.year)
    const uniqueYear = new Set(years);
    const uniqueArray = [...uniqueYear];
    return uniqueArray.sort();
  }
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='header__title'>Owen Wilson's "wow"</h1>
      </header>
      <main className='main'>
        <Filters
          nameMovie={nameMovie}
          handleChange={handleChange}
          yearMovie={setYearMovie}
          handleSelect={handleSelect}
         years={getYears()}
        />
        <MovieSceneList
          resultApi={filteredScenes}
        />
      </main>
    </div>
  );
};

export default App;
