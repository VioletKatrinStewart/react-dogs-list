import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/admin" exact>
        Admin
      </NavLink>
    </header>
  );
}
