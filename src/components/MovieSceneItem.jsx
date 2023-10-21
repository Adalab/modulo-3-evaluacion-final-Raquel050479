const MovieSceneItem = ({ scene }) => {
  return (
    <>
      <a className='card__a' href='#'>
        <h5 className='card__title'>{scene.movie} - {scene.year}</h5>
        <img className='card__img' src={scene.poster} alt='' />
        <p className='card__full-line'>Full line: "{scene.full_line}"</p>

      </a>
    </>
  );
};

export default MovieSceneItem;
