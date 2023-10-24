import { Link } from 'react-router-dom';

const MovieSceneDetail = ({ scene }) => {
  return (
    <article className='cardDetail'>
      <img className='cardDetail__img' src={scene.poster} alt={scene.movie} />
      <div className='cardDetail__div'>
        <h5 className='cardDetail__title'>
          <i className='cardDetail__i fa-solid fa-film'></i>
          {scene.movie} - {scene.year}
        </h5>
        <p className='cardDetail__full-line'>
          <i className='cardDetail__i fa-solid fa-comment'></i>Full line: "
          {scene.full_line}"
        </p>
        <p className='cardDetail__director'>
          <i className='cardDetail__i fa-solid fa-clapperboard'></i>Director:{' '}
          {''}
          {scene.director}
        </p>
        <a className='cardDetail__audio' href={scene.audio} target='_blank'>
          <i className='cardDetail__i fa-solid fa-circle-play'></i>Listen to the
          audio
        </a>
      </div>
      <Link className='cardDetail__a' to={'/'}>
        <i className='cardDetail__i fa-solid fa-reply'></i>
      </Link>
    </article>
  );
};

export default MovieSceneDetail;
