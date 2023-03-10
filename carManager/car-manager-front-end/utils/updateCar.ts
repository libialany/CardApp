import { navigate } from './navigate';
import swal from 'sweetalert';
import { Car } from '../types/Car';

export const updateCar = async (car: Car) => {
  await fetch(`${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/car/${car.uuid}`, {
    method: 'PUT',
    headers: {
      Accept: 'aplication/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });

  swal('Saved!', 'car added sucessfully', 'success', {
    className: 'confirmation-button',
  });
  navigate({ link: '/' });
};
