import React from 'react'
import "./Action.css"
import { useLocation } from 'react-router-dom';
import Title from '../../components/Title/Title';

const Action = () => {

    const location = useLocation();

    console.log(location.state)

  return (
    <div>
      <Title title="Traffic Light App - Action Page" />

      <h1 style={{ color: location.state?.color || "black" }}>
        {location.state?.sign || "Default Text"}
        </h1>
    </div>
  )
}

export default Action
