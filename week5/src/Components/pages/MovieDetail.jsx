import React from 'react';
import { useParams, useLocation } from 'react-router-dom';


const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
const MovieDetail = () => {
  const location = useLocation();

  const { name } = useParams();
  const { backImg } = location.state || {};

  return (
    <div>
      <h1 style={{ color: 'black' }}>영화 소개 페이지</h1>
      <h2 style={{ color: 'black' }}>{name}</h2>
      {backImg && (
        <img src={IMG_BASE_URL + backImg} alt="Movie Poster" width="300" />
      )}
    </div>
  );
};

export default MovieDetail;
