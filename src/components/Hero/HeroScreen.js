import React, { useMemo } from 'react';
import { getHeroById } from '../helpers/getHeroById';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { heroImages } from '../helpers/heroImages';

const HeroScreen = () => {

  const {id} = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  if (!hero) { return <Navigate to="/" />}

  const image = `/assets/${id}.jpg`;

  const {superhero, alter_ego, publisher, first_appearance, characters} = hero

  const handleReturn = () => navigate(-1);

  return (
      <div className="row mt-5">
        <div className="col-4">
          <img className="img-thumbnail animate__animated animate__fadeInLeft" src={heroImages(`./${id}.jpg`)} alt={superhero} />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{superhero}</h3>
          <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
              <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
              <li className="list-group-item"><b>First appearance</b>: {first_appearance}</li>
          </ul>
          <h5 className="mt-3">Characters:</h5>
          <p>{characters}</p>

          <button className="btn btn-outline-info" onClick={handleReturn}>Go back</button>
        </div>
      </div>
  )
};

export default HeroScreen;
