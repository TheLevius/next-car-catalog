import CarDetails from '@/components/screens/car/CarDetails';
import Home from '@/components/screens/home/Home';
import { ICar } from '@/interfaces/car.interface';
import CarService from '@/services/car.service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

const carService = new CarService();

const CarDetailPage: NextPage<{ car: ICar }> = ({ car }) => {
	return <CarDetails car={car} />;
};

export const getStaticPaths: GetStaticPaths<
	ParsedUrlQuery & { id: string }
> = async () => {
	const cars = await carService.findAll();
	return {
		paths: cars.map((car) => ({ params: { id: String(car.id) } })),
		fallback: 'blocking',
	};
};
export const getStaticProps: GetStaticProps<
	{
		car: ICar | null;
	},
	ParsedUrlQuery & { id: string }
> = async ({ params }) => {
	const car = params?.id ? await carService.findOne(params.id) : null;
	return {
		props: { car },
		revalidate: 60,
	};
};

export default CarDetailPage;
