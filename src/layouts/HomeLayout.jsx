import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <div>
      <header>hola</header>
      <Outlet/>
    </div>
  )
}
