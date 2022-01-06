import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  console.log(dogs);
  return (
    <div>
      {dogs.map((dog) => (
        <Link key={dogs.id} to={`/dogs/${dogs.id}`}>
          {dog.name}
          <img src={dog.image} />
        </Link>
      ))}
    </div>
  );
}
