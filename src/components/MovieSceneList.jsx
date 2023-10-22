import MovieSceneItem from './MovieSceneItem';
import {Link} from 'react-router-dom';
const MovieSceneList = ({ resultApi }) => {
  const renderResult = resultApi.map((scene) => {
    return (
    <Link to={'/scene/' + scene.id}>
      <li className='card' key={scene.id}>
        <MovieSceneItem scene={scene} />
      </li>
    </Link>
    );
  });

  return (
    <>
      <ul className='cardList '>{renderResult}</ul>
    </>
  );
};

export default MovieSceneList;
