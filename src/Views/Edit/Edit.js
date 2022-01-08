import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import { getDog, updateDog } from '../../services/DogData';
import { useParams } from 'react-router';
import { deleteDog } from '../../services/DogData';

export default function Edit() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDog(params.id);

      setName(resp.name);
      setBio(resp.bio);
      setImage(resp.image);
      setAge(resp.age);
      setBreed(resp.breed);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

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
      await updateDog(dog, params.id);
      setMessage('Edited');
    } catch {
      setMessage('Error');
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    await deleteDog(params.id);
  }
  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <Header></Header>
      <Form
        message={message}
        handleSave={handleSave}
        handleChange={handleChange}
        handleDelete={handleDelete}
        name={name}
        bio={bio}
        age={age}
        image={image}
        breed={breed}
      ></Form>
    </div>
  );
}
