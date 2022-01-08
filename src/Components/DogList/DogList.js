import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default function DogList({ dogs }) {
  return (
    <div className="doglist">
      {dogs.map((dog) => (
        <Link className="doglink" key={dog.id} to={`/dogs/${dog.id}`}>
          <h3> {dog.name} </h3>
          <img src={dog.image} />
        </Link>
      ))}
    </div>
  );
}
