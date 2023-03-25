import React from 'react'
import { useLocation } from "react-router-dom";

const Home = () => {

  const location = useLocation();

  return (
    <>
    <h1>Welcome </h1>
    <p>Username: <b>{location.state.user}</b></p>
    <p>Email Address: <b>{location.state.mail}</b></p>
    </>
  )
}

export default Home