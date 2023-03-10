import CarDetail from '../../components/CarDetail';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { carProps } from '../../types/Car';
import Button from '../../components/Button';
import { deleteCar } from '../../utils/deleteCar';
import { navigate } from '../../utils/navigate';
import { buttonsContainer, innerwrapper, wrapper } from './style';

const ViewPage = ({ car }: carProps) => {
  return (
    <>
      <NavBar />
      <div style={wrapper as React.CSSProperties}>
        <div style={innerwrapper}>
          <CarDetail car={car} />
        </div>
        <br />
        <div style={buttonsContainer as React.CSSProperties}>
          <Button onClick={navigate} label="Go Back" param={{ link: '/' }} />
          <Button
            onClick={navigate}
            label="Update"
            param={{ link: `/car/update/${car.uuid}` }}
          />
          <Button onClick={deleteCar} label="Delete" param={car} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewPage;
