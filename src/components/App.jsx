// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';

import '../styles/App.scss';
import getDataFromApi from '../services/api';
//import Filters from './Filters';

const App = () => {
  // Estados

  const [starWarsData, setStarWarsData] = useState({});

  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    getDataFromApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setStarWarsData(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  return (
    <>
      <header className='header'>
      <h1 className='header__title'>Owen Wilson's "wow"</h1>
      </header>
    </>
  );
};

export default App;
