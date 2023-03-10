import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import TextField from '../../components/TextField';
import Footer from '../../components/Footer';
import { carProps } from '../../types/Car';
import { updateCar } from '../../utils/updateCar';
import {
  buttonDiv,
  innerwrapper,
  innerwrapperDiv,
  innerwrapperLabel,
  wrapper,
} from '../createPage/style';
import Button from '../../components/Button';

export default function UpdatePage({ car }: carProps) {
  const [name, setName] = useState(car.name);
  const [model, setModel] = useState(car.model);
  const [description, setDescription] = useState(car.description);
  const [color, setColor] = useState(car.color);
  return (
    <>
      <NavBar />
      <div style={wrapper}>
        <form style={innerwrapper as React.CSSProperties} method="post">
          <div style={innerwrapperDiv as React.CSSProperties}>
            <label style={innerwrapperLabel} htmlFor="name">
              Name:{'         '}
            </label>
            <TextField id={'name'} name={name} onChange={setName} />
          </div>
          <div style={innerwrapperDiv as React.CSSProperties}>
            <label style={innerwrapperLabel} htmlFor="model">
              Model:{'         '}
            </label>
            <TextField id={'model'} name={model} onChange={setModel} />
          </div>
          <div style={innerwrapperDiv as React.CSSProperties}>
            <label style={innerwrapperLabel} htmlFor="description">
              Description:
            </label>
            <TextField
              id={'description'}
              name={description}
              onChange={setDescription}
            />
          </div>
          <div style={innerwrapperDiv as React.CSSProperties}>
            <label style={innerwrapperLabel} htmlFor="color">
              Color:{'          '}
            </label>
            <TextField id={'color'} name={color} onChange={setColor} />
          </div>
          <div style={buttonDiv}>
            <Button
              onClick={updateCar}
              label="Save Car"
              param={{ uuid: car.uuid, name, model, description, color }}
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
