import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import { insertDog } from '../../services/DogData';

export default function Admin() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');
  const [message, setMessage] = useState('');

  function handleChange(key, value) {
    if (key === 'name') {
      setName(value);
    } else if (key === 'bio') {
      setBio(value);
    } else if (key === 'age') {
      setAge(value);
    } else if (key === 'image') {
      setImage(value);
    } else if (key === 'breed') {
      setBreed(value);
    }
  }

  async function handleSave(e) {
    try {
      e.preventDefault();
      const dog = { name: name, age: age, bio: bio, image: image, breed: breed };
      await insertDog(dog);
      setMessage('Added');
    } catch {
      setMessage('Error');
    }
  }

  return (
    <div className="admindiv">
      <Header></Header>
      <Form
        message={message}
        handleSave={handleSave}
        handleChange={handleChange}
        name={name}
        bio={bio}
        age={age}
        image={image}
        breed={breed}
      ></Form>
    </div>
  );
}
