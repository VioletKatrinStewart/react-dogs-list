import React from 'react';

export default function Form({ name, bio, age, image, breed, handleChange, handleSave }) {
  return (
    <div className="form">
      <h2> Enter the details to add a dog </h2>
      <label>
        Name
        <input
          value={name}
          onChange={(e) => {
            handleChange('name', e.target.value);
          }}
          type="text"
          placeholder="Name"
        />
      </label>
      <label>
        Bio
        <input
          value={bio}
          onChange={(e) => {
            handleChange('bio', e.target.value);
          }}
          type="text"
          placeholder="Bio"
        />
      </label>
      <label>
        Age
        <input
          value={age}
          onChange={(e) => {
            handleChange('age', e.target.value);
          }}
          type="number"
          placeholder="Age"
        />
      </label>
      <label>
        Image
        <input
          value={image}
          onChange={(e) => {
            handleChange('image', e.target.value);
          }}
          type="text"
          placeholder="image"
        />
      </label>
      <label>
        Breed
        <input
          value={breed}
          onChange={(e) => {
            handleChange('breed', e.target.value);
          }}
          type="text"
          placeholder="Breed"
        />
      </label>

      <button onClick={handleSave}>Submit</button>
    </div>
  );
}
