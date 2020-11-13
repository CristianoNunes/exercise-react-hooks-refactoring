// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  initial_Cars = {
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
  }
  inital_Signal = {
    signal: {
      color: 'red',
    }
  }
  const { cars, setCars } = useState({ ...initial_Cars });
  const { signal, setSignal } = useState({ ...initial_Cars });

  const moveCar = (car, value) => {
    setCars({ cars: {[car]: value,}});
  };

  const changeSignal = (signalColor) => {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
