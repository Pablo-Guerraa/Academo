import React from 'react';
import { Outlet } from 'react-router-dom';

export default function LogoOnlyLayout() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
