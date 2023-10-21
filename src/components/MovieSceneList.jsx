import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ resultApi }) => {
  const renderResult = resultApi.map((scene) => {
    return (
      <li className='card' key={scene.id}>
        <MovieSceneItem scene={scene} />
      </li>
    );
  });

  return (
    <>
      <ul className='cardList '>{renderResult}</ul>
    </>
  );
};

export default MovieSceneList;
