import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import DogDetail from '../../Components/DogDetail/DogDetail';
import { getDog } from '../../services/DogData';
import { useParams } from 'react-router-dom';
import './Dog.css';

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

  return (
    <div className="dogdiv">
      <Header />
      <DogDetail dog={dog} />
    </div>
  );
}
