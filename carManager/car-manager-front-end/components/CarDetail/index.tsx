import React from 'react';
import { carProps } from '../../types/Car';

const CarDetail = ({ car }: carProps) => {
  return (
    <>
      <h4>{car.name}</h4>
      <p>{car.model}</p>
      <p>{car.color}</p>
      <p>{car.description}</p>
    </>
  );
};

export default CarDetail;
