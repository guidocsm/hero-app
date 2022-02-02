import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../helpers/heroImages';

import './HeroCard.css';

const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {

    // const image = `/assets/${id}.jpg`;

  return (
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
            
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImages(`./${id}.jpg`)} className="card-img" alt={superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <div className="card-title"><h5>{superhero}</h5></div>
                        <div className="card-text"><p>{alter_ego}</p></div>
                        {(alter_ego !== characters ? <div className="text-muted">{characters}</div> : null)}
                        <p className="card-text">{first_appearance}</p>
                        <Link className="card-link" to={`/hero/${id}`}>More info</Link>
                    </div>
                </div>
            </div>

        </div>
      </div>
  )
};

export default HeroCard;
