import React from 'react';
import { allCars, allCarsContainer, allCarsH1 } from './styles';
import CarsList from '../CarList';
import { carProps } from '../../types/Car';

const AllCars = ({ car }: carProps) => {
  return (
    <div style={allCars}>
      <h1 style={allCarsH1 as React.CSSProperties}>Available Cars</h1>
      <div style={allCarsContainer}>
        <CarsList car={car} />
      </div>
    </div>
  );
};

export default AllCars;
