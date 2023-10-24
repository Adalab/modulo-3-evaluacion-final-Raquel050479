import MovieSceneItem from './MovieSceneItem';
import { Link } from 'react-router-dom';

const MovieSceneList = ({ resultApi }) => {
  const sortedScenes = [...resultApi];
  sortedScenes.sort((a, b) => {
    const nameA = a.movie.toLowerCase();
    const nameB = b.movie.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const renderResult = sortedScenes.map((scene) => {
    return (
      <li className='card' key={scene.id}>
        <Link to={'/scene/' + scene.id} className='card__a'>
          <MovieSceneItem scene={scene} />
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul className='cardList'>{renderResult}</ul>
    </>
  );
};

export default MovieSceneList;
