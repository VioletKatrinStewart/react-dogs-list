import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <Link className="doglink" key={dog.id} to={`/dogs/${dog.id}`}>
          {dog.name}
          <img src={dog.image} />
        </Link>
      ))}
    </div>
  );
}
