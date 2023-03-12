import React from 'react';
import { User, userProps } from '../../types/User';
import CarItem from '../CarItem';
import { useRouter } from 'next/router'
import {updateCar} from '../../utils/updateCar'
import {deleteCar} from '../../utils/deleteCar'
const CarsList = ({ car }: any) => {
  const router= useRouter();
  const onHoli = () => {
    console.log(car);
  };
  const onDelete = (_card:User) => {
    console.log('recivi esto en borrar');
    deleteCar(_card)
  };
  const onEdit = (_card:User) => {
    console.log('recivi esto en editar');
    const url = 'http://localhost:3000/car/update'
    router.push(`${url}/${_card.uuid}`)
    // console.log(_card.name)
    //updateCar(_card)
  };
  return (
    <div>
      {/* <button onClick={onHoli}>OnClick</button> */}
      <table>
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">edad</th>
            <th scope="col">asignacion</th>
          </tr>
        </thead>
        <tbody>
          {car.map((c: User, index: number) => (
            <tr key={index}>
              <td>{c.nombre} {c.apellidoP} {c.apellidoM}</td>
              <td>{c.edad}</td>
              <td>
                <button onClick={onHoli}>asignacion</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {car.map((c: Car) => (
        <CarItem car={c} key={c.uuid}></CarItem>
      ))} */}
    </div>
  );
};

export default CarsList;
