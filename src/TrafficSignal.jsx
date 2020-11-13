import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

export default function TrafficSignal() {
  
  const renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  const { color, changeState } = useContext(CarsContext);
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeState('color', 'red')} type="button">
          Red
        </button>
        <button onClick={() => changeState('color', 'yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeState('color', 'green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(color)} alt="" />
    </div>
  );
};
