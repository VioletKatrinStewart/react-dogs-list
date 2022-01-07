import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import DogDetail from '../../Components/DogDetail/DogDetail';
import { getDog } from '../../services/DogData';
import { Link, useParams } from 'react-router-dom';
import './Dog.css';
import { deleteDog } from '../../services/DogData';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const detail = await getDog(id);
      setDog(detail);
      setLoading(false);
    };
    getDetail();
  }, [id]);
  if (loading) return <h1>loading</h1>;

  const deleteButton = async () => {
    await deleteDog(dog.id);
  };

  return (
    <div className="dogdiv">
      <Header />
      <DogDetail dog={dog} deleteButton={deleteButton} />
      <Link to={`/dogs/${id}/edit`}>Edit</Link>
    </div>
  );
}
