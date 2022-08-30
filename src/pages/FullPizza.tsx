/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../baseUrl';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(baseUrl + '/' + id);
        setPizza(data);
      } catch (error) {
        console.log(error);
        alert('Пицца не найдена');
        navigate('/React-pizza');
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="loading">Загрузка пиццы...</div>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" className="fullPizzaImg" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to={'/'}>
        <button className="button button--outline button--add backButton">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
