import { navigate } from './navigate';
import swal from 'sweetalert';
import { SaveCar } from '../types/Car';

export const saveCar = async (car: SaveCar) => {
  await fetch(`${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/car`, {
    method: 'POST',
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
