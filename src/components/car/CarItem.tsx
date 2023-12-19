import { ICar } from '@/interfaces/car.interface';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const CarItem: FC<{ car: ICar }> = ({ car }) => {
	return (
		<div className='flex flex-col shrink-0'>
			<Image src={car.image} width='300' height='300' alt={car.name} />
			<h2>{car.name}</h2>
			<small>{car.price}</small>
			<Link href={`/car/${car.id}`}>Read more</Link>
		</div>
	);
};

export default CarItem;
