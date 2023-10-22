const FilterByMovie = ({ nameMovie, handleChange }) => {
  const handleInput = (event) => {
    handleChange(event.target.value);
  };

  return (
    <>
      <label className='form__label' htmlFor='nameMovie'>
        Movie:
        <input
          className='form__input'
          type='text'
          name='nameMovie'
          id='nameMovie'
          value={nameMovie}
          onChange={handleInput}
        />
      </label>
    </>
  );
};

export default FilterByMovie;
