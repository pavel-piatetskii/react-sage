import React from "react";
import { Link } from 'react-router-dom';

import logo from "./logo.svg";
import Dropdown from "./Dropdown";
import User from "./User";

import "./index.scss";

export default function NavBar(props) {

  return (
    <nav className="navbar">
      <div className="navbar--centered">
        <h1 className="navbar__title">
          CocktailSage
        </h1>
        <Link to='/'>
          <img className="navbar__logo" src={logo} alt="Logo" />
        </Link>
        <Link to='/create'>
          <button className="dropbtn">Create</button>
        </Link>
        <Link to='/search'>
          <button className="dropbtn">Search...</button>
        </Link>
        <Dropdown />
      </div>
      <div className="navbar__login">
        {props.user && (
          <User user={props.user} />
        )}
      </div>
    </nav>
  );
};