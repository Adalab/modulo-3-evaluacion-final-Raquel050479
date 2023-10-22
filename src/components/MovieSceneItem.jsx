const MovieSceneItem = ({ scene }) => {
  return (
    <>
      <a className='card__a' href='#'>
      <img className='card__img' src={scene.poster} alt='' />
        <h5 className='card__title'>{scene.movie} - {scene.year}</h5>
        <p className='card__full-line'>Full line: "{scene.full_line}"</p>

      </a>
    </>
  );
};

export default MovieSceneItem;
