import React, { useEffect, useState } from 'react';
import get from '../services/get';
import idUrl from '../services/idUrl';
import '../styles/card.css';

export default function Card({ movie, setVideoId }) {

  const { id, image, title, year, imDbRating } = movie;

  const urlTrailer = async() => {
    try {
      const respond = await get(idUrl + id);
      const data = respond.videoId;
      setVideoId(data);
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      console.log('Fallo en el idApi');
    }
  };
 
  return (
    <div className='card'>
      <img
        className='card__img' 
        src={image} 
        alt={title} 
      />
      <div className='card__container-button'>
        <button 
        className='card__button'
        onClick={urlTrailer}
        >Ver Trailer</button>
      </div>
    </div>
  )
}