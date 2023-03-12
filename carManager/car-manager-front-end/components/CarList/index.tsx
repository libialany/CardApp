import React from 'react';
import { Car, carProps } from '../../types/Car';
import CarItem from '../CarItem';
import { useRouter } from 'next/router'
import {updateCar} from '../../utils/updateCar'
import {deleteCar} from '../../utils/deleteCar'
import UpdatePage from '../../templates/updatePage';
const CarsList = ({ car }: any) => {
  const router= useRouter();
  const onHoli = () => {
    console.log(car);
  };
  const onDelete = (_card:Car) => {
    console.log('recivi esto en borrar');
    deleteCar(_card)
  };
  const onEdit = (_card:Car) => {
    console.log('recivi esto en editar');
    const url = 'http://localhost:3000/car/update'
    //router.push(`${url}/${_card.uuid}`)
    // console.log(_card.name)
    //updateCar(_card)
  };
  return (
    <div>
      {/* <button onClick={onHoli}>OnClick</button> */}
      <table>
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">color</th>
            <th scope="col">modelo</th>
            <th scope="col">acciones</th>
          </tr>
        </thead>
        <tbody>
          {car.map((c: Car, index: number) => (
            <tr key={index}>
              <td>{c.name}</td>
              <td>{c.model}</td>
              <td>{c.color}</td>
              <td>
                <button onClick={()=>onDelete(c)}>eliminar</button>
                <button onClick={()=>onEdit(c)}>editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {car.map((c: Car) => (
        <CarItem car={c} key={c.uuid}></CarItem>
      ))} */}
      <UpdatePage car={car} />
    </div>
    
  );
};

export default CarsList;
