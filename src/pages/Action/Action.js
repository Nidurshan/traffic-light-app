import React from 'react'
import "./Action.css"
import { useLocation } from 'react-router-dom';

const Action = () => {

    const location = useLocation();

    console.log(location.state)

  return (
    <div>
      <h1 style={{ color: location.state?.color || "black" }}>
        {location.state?.sign || "Default Text"}
        </h1>
    </div>
  )
}

export default Action
