import Home from '@/components/screens/home/Home';
import { ICar } from '@/interfaces/car.interface';
import CarService from '@/services/car.service';
import { GetStaticProps, NextPage } from 'next';
const carService = new CarService();
const HomePage: NextPage<{ cars: Array<ICar> }> = ({ cars }) => {
	return <Home cars={cars} />;
};

export const getStaticProps: GetStaticProps<{
	cars: ICar[];
}> = async () => {
	const cars = await carService.findAll();
	return {
		props: { cars },
		revalidate: 60,
	};
};

export default HomePage;
