import React from 'react';
import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Filters = ({ nameMovie, handleChange, yearMovie, handleSelect, years }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <>
      <h2>Filter by...</h2>
      <form className='filters' onSubmit={handleSubmit}>
        <FilterByMovie nameMovie={nameMovie} handleChange={handleChange} />
        <FilterByYear yearMovie={yearMovie} handleSelect={handleSelect} years={years}/>
      </form>
    </>
  );
};

export default Filters;
