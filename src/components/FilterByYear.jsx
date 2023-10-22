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
      <label className='form__label' htmlFor='yearMovie'>
        Year:
        <select
          className='form__select'
          name='yearMovie'
          id='yearMovie'
          value={yearMovie}
          onChange={handleSelectYear}
        >
          <option value=''>All</option> {renderYears()}
        </select>
      </label>
    </>
  );
};

export default FilterByYear;
