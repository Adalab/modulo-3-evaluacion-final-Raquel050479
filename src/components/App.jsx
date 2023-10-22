// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import '../styles/App.scss';
import getDataFromApi from '../services/api';
import MovieSceneList from './MovieSceneList';
import ls from '../services/localStorage';
import Filters from './Filters';

import MovieSceneItem from './MovieSceneItem';

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
    .filter((scene) => {
      if (yearMovie === '') {
        return true;
      } else {
        return yearMovie.includes(scene.year);
      }
    });
  const getYears = () => {
    const years = resultApi.map((scene) => scene.year);
    const uniqueYear = new Set(years);
    const uniqueArray = [...uniqueYear];
    return uniqueArray.sort();
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/scene/:id', pathname);
  const sceneId = routeData !== null ? routeData.params.id : '';
  const sceneData = resultApi.find((scene) => scene.id === sceneId);

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='header__title'>Owen Wilson's "wow"</h1>
      </header>
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  nameMovie={nameMovie}
                  handleChange={handleChange}
                  yearMovie={yearMovie}
                  handleSelect={handleSelect}
                  years={getYears()}
                />
                <MovieSceneList resultApi={filteredScenes} />
              </>
            }
          />
      {/*    <Route
            path='/scene/:id'
            element={
              <>
                <MovieSceneItem scene={sceneData} />
                <Link to=''>Back</Link>
              </>
            }
          /> */}
        </Routes>
      </main>
      <footer className='footer'>
        <p className='footer__title'>
          &copy; 2023 - Rachel's project{' '}
          <span className='footer__heart'>&#10084;</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
