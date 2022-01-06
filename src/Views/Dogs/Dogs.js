import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import { getDogs } from '../../services/DogData';
import DogList from '../../Components/DogList/DogList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getDogs();
      setDogs(data);
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) return <h1>loading</h1>;
  return (
    <div>
      <Header />
      <DogList dogs={dogs} />
    </div>
  );
}
