// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

export default function Provider({ children }) {
  const initial_State = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      color: 'red'
  }

  const [ state, setState ] = useState({ ...initial_State });

  const changeState = (key, value) => {
    setState({...state, [key]: value });
  };

  const contextValue = {
    ...state,
    changeState,
  };

  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
