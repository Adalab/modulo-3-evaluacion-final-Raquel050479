import React from 'react';
import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Filters = ({
  nameMovie,
  handleChange,
  yearMovie,
  handleSelect,
  years,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='form__title'>Filter by...</h2>
        <FilterByMovie nameMovie={nameMovie} handleChange={handleChange} />
        <FilterByYear
          yearMovie={yearMovie}
          handleSelect={handleSelect}
          years={years}
        />
      </form>
    </>
  );
};

export default Filters;
