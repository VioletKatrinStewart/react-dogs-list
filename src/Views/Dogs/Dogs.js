import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import { getDogs } from '../../services/DogData';
import DogList from '../../Components/DogList/DogList';
import './Dogs.css';

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
    <div className="pinkdiv">
      <Header />
      <h1 className="text">WELCOME TO DOG ADOPTION</h1>
      <h2 className="text">
        These are the dogs we have available to adopt, click for more details!
      </h2>
      <DogList dogs={dogs} />
    </div>
  );
}
