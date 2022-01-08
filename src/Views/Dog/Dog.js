import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import DogDetail from '../../Components/DogDetail/DogDetail';
import { getDog } from '../../services/DogData';
import { Link, useParams, useHistory } from 'react-router-dom';
import './Dog.css';
import { deleteDog } from '../../services/DogData';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const history = useHistory();

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
    setMessage('success');
    setTimeout(() => {
      history.push(`/`);
    }, 2000);
  };

  return (
    <div className="dogdiv">
      <Header />
      <DogDetail dog={dog} deleteButton={deleteButton} message={message} />
      <Link to={`/dogs/${id}/edit`}>Edit</Link>
    </div>
  );
}
