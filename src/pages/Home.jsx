import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import get from '../services/get';
import url from '../services/url';
import '../styles/home.css';

export default function Home() {

  const [ videoId, setVideoId ] = useState('XPG0MqIcby8');
  const [ movies, setMovies ] = useState(null);

  const getApi = async() => {
    try {
      const data = await get(url);
      setMovies(data.items);
    } catch (error) {
      console.log('fallo en la api');
    }
  };

  useEffect(()=>{
    getApi();
  }, []);

  return (
    <div className='home'>
      <section className='home_container-video'>
        <iframe 
          width='560' 
          height='315' 
          src={`https://www.youtube.com/embed/${videoId}`} 
          title='video' 
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
          className='home__video'
        >
            {/* Esta etiquta no tiene texto  */}
        </iframe>
      </section>
      <h2 className='home__title'>Peliculas</h2>
      <section className='home__container-cards'>
        {
          movies?.map(movie => (
              <Card key={movie.id} movie={movie} setVideoId={setVideoId}/>
          ))
        }
      </section>
    </div>
  )
}
