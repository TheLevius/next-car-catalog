import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import { ICar } from '@/interfaces/car.interface';
import CarItem from '@/components/car/CarItem';

const Home: FC<{ cars: Array<ICar> }> = ({ cars }) => {
	return (
		<Layout title='Home' description={'We like our customer'}>
			<h1>Hello Testing</h1>
			<div className='flex flex-wrap justify-around'>
				{cars?.length && cars.map((car) => <CarItem car={car} key={car.id} />)}
			</div>
		</Layout>
	);
};

export default Home;
