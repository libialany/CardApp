import Router from 'next/router';
import swal from 'sweetalert';
import { Car } from '../types/Car';
import { navigate } from './navigate';

export const deleteCar = async (car: Car) => {
  const willDelete = await swal({
    title: 'Are you sure?',
    text: 'Are you sure want to delete this note?',
    icon: 'warning',
    buttons: ['Cancel', 'Delete'],
    dangerMode: true,
  });

  if (willDelete) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/car/${car.uuid}`,
      {
        method: `DELETE`,
      },
    );
    swal('Deleted!', 'Note deleted sucessfully', 'success', {
      className: 'confirmation-button',
    });
    navigate({ link: '/' });
  }
};
