import CarItem from '@/components/car/CarItem';
import Layout from '@/components/layout/Layout';
import { ICar } from '@/interfaces/car.interface';
import { FC } from 'react';

const CarDetails: FC<{ car: ICar }> = ({ car }) => {
	return (
		<Layout title={car.name} description='Good expensive car'>
			<CarItem car={car} />
		</Layout>
	);
};

export default CarDetails;
