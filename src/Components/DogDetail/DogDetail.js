import React from 'react';
import './DogDetail.css';

export default function DogDetail({ dog, deleteButton, message }) {
  return (
    <div className="detaildiv">
      <h1> This is {dog.name} </h1>
      <p>{message}</p>
      <img src={dog.image} />
      <p>
        {dog.name} is a {dog.breed} who is
        {dog.age} . Here is a little bit about our furry friend: ...
        {dog.bio}
      </p>
      <button onClick={deleteButton}>Delete</button>
    </div>
  );
}
