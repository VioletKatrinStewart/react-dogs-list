import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Form/Form';
import { getDog, updateDog } from '../../services/DogData';
import { deleteDog } from '../../services/DogData';
import { useParams } from 'react-router';

//ADD LINK ON DETAILDOG PAGE TO EDIT THAT DOG
//edit/:id - similiar to how you link from dog to detail add to app js
//SHOWS PREFILLED FORM FOR EDITING DOG
//UPDATE BUTTON AND DELETE BUTTON
//USE UPDATEDOG AND DELETE DOG FUNCTIONS
//use use params and find by id function
//use effect gets dog by id

export default function Edit() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDog(params.id);

      setName(resp.name);
      setBio(resp.bio);
      setImage(resp.image);
      setAge(resp.age);
      setBreed(resp.breed);
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
    e.preventDefault();
    const dog = { name: name, age: age, bio: bio, image: image, breed: breed };
    await updateDog(dog);
  }

  //CREATE HANDLE DELETE FUNCTION FOR DELETEDOG

  return (
    <div>
      <Header></Header>
      <Form
        handleSave={handleSave}
        handleChange={handleChange}
        name={name}
        bio={bio}
        age={age}
        image={image}
        breed={breed}
      ></Form>
      <button>Delete</button>
      <button>Update</button>
    </div>
  );
}
