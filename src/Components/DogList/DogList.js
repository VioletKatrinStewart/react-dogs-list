import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          {dog.name}
          <img src={dog.image} />
        </Link>
      ))}
    </div>
  );
}
