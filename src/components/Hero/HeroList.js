import React, { useMemo } from 'react';
import getHeroByPublisher from '../helpers/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {
    
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
      <>
          <h1 className="animate__animated animate__fadeIn">{publisher}</h1>
          <hr />

        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
                {heroes.map(eachHero => (
                    <HeroCard {...eachHero} key={eachHero.id} />
                ))}
        </div>
      </>
  )
};

export default HeroList;
