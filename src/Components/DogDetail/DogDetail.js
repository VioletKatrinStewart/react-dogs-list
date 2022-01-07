import React from 'react';

export default function DogDetail({ dog }) {
  return (
    <div>
      {dog.name}
      <img src={dog.image} />
      {dog.breed}
      {dog.age}
      {dog.bio}
    </div>
  );
}
