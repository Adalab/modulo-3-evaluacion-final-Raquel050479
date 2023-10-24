import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import '../styles/App.scss';
import getDataFromApi from '../services/api';
import Filters from './form/Filters';
import MovieSceneList from './scenes/MovieSceneList';
import MovieSceneDetail from './scenes/MovieSceneDetail';
import ls from '../services/localStorage';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [resultApi, setResultApi] = useState(ls.get('resultApi', []));
  const [nameMovie, setNameMovie] = useState('');
  const [yearMovie, setYearMovie] = useState('');

  useEffect(() => {
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
    .filter((scene) =>
      scene.movie.toLowerCase().includes(nameMovie.toLowerCase())
    )
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
      <Header />
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
                {filteredScenes.length === 0 ? (
                  <p className='message'>
                    No existen coincidencias con {nameMovie}, prueba de nuevo.
                  </p>
                ) : (
                  <MovieSceneList resultApi={filteredScenes} />
                )}
              </>
            }
          />
          <Route
            path='/scene/:id'
            element={
              <>
                <MovieSceneDetail scene={sceneData} />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
