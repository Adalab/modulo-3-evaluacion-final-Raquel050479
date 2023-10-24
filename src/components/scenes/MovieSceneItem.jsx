const MovieSceneItem = ({ scene }) => {
  return (
    <>
      <img className='card__img' src={scene.poster} alt={scene.movie} />
      <h5 className='card__title'>
        {scene.movie} - {scene.year}
      </h5>
      <p className='card__full-line'>Full line: "{scene.full_line}"</p>
    </>
  );
};

export default MovieSceneItem;
