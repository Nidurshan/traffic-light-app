import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const action = (signValue, colorValue) => {
        var stateObj = {
            sign: signValue,
            color: colorValue
        }
        navigate("./action", {state: stateObj});
    }

    return (
      <div className="App">
        
        <h1 className="title">Traffic Light App</h1>

        <div className="signs">
            <div className="stop" onClick={() => action("Stop", "red")}></div>
            <div className="ready" onClick={() => action("Ready", "yellow")}></div>
            <div className="go" onClick={() => action("Go", "green")}></div>
        </div>
      </div>
    );
  };

export default Home
