import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HeroCard from '../Hero/HeroCard';
import { getHerosByNames } from '../helpers/getHerosByNames';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { useMemo } from 'react/cjs/react.development';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q} = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
      searchText: q
  });

  const heroesFiltered = useMemo(() => getHerosByNames(q), [q])

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`);
  }

  const {searchText} = formValues

  return (
      <div className="animate__animated animate__fadeIn">
        <h1>Search</h1>
        <hr />

        <div className="row">
            <div className="col-5"> 
              <form onSubmit={handleSubmit}>
                  <input onChange={handleInputChange} type="text" placeholder="Search an hero..." value={searchText || ""} className="form-control" name="searchText" />
                  <button className="btn btn-outline-primary mt-1" type="submit" >Search</button>
              </form>
            </div>
            
            <div className="col-7 ">
                <h4>Results</h4>
                <hr />

                {(q === "")
                ? <div className="alert alert-info">Search an hero</div>
                : (heroesFiltered.length === 0 ? <div className="alert alert-danger">No results</div>
                : null)}

                {heroesFiltered.map(hero => {
                  return <HeroCard {...hero} key={hero.id} />
                })}
            </div>
        </div>
      </div>
  )
};

export default SearchScreen;