const FilterByMovie = ({ nameMovie, handleChange }) => {
  const handleInput = (event) => {
    handleChange(event.target.value);
  };

  return (
    <>
      <label className='form__label' htmlFor='searchMovie'>
        Movie:
        <input
          className='form__input'
          type='text'
          name='searchMovie'
          id='searchMovie'
          value={nameMovie}
          onChange={handleInput}
        />
      </label>
    </>
  );
};

export default FilterByMovie;
