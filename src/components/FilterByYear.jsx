const FilterByYear = ({ yearMovie, handleSelect, years }) => {
  const handleSelectYear = (event) => {
    handleSelect(event.target.value);
  };

  const renderYears = () => {
    return years.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };

  return (
    <>
      <label className='form__label' htmlFor='year'>
        Year:{' '}
      </label>
      <select
        className='form__select'
        name='searchYear'
        id='searchYear'
        value={yearMovie}
        onChange={handleSelectYear}
      >
        <option value='all'>All</option> {renderYears()}
      </select>
    </>
  );
};

export default FilterByYear;
