import { GetStaticPaths } from 'next/types';
import { Car, carProps } from '../../../../types/Car';
import UpdatePage from '../../../../templates/updatePage';

export default function Update({ car }: carProps) {
  return (
    <>
      <UpdatePage car={car} />
    </>
  );
}
export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/car/${context?.params?.id}`,
  );
  const car = await res.json();
  return {
    props: {
      car,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  //${process.env.NEXT_PUBLIC_PORT}
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/car`);
  const cars: Car[] = await res.json();
  const ids = cars.map((car) => car.uuid);
  const paths = ids.map((uuid) => ({
    params: {
      id: uuid.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
