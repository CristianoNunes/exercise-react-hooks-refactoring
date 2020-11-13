import PropTypes from 'prop-types';
import React, { useState }  from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {

  const initial_Cars = {
    redCar: false,
    blueCar: false,
    yellowCar: false
  }
  
  const [cars, setCars] = useState({ ...initial_Cars });

  const moveCar = (car, value) => {
    setCars({ [car]: value })
  };
  
  const contextValue = {
    ...cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
