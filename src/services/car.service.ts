import { ICar } from '@/interfaces/car.interface';
import axios, { AxiosInstance } from 'axios';

export default class CarService {
	private readonly cars: AxiosInstance = axios.create({
		baseURL: 'http://localhost:3010/cars',
	});
	constructor() {}
	public async findAll(): Promise<Array<ICar>> {
		const res = await this.cars.get<Array<ICar>>('');
		return res.data;
	}
	public async findOne(id: string): Promise<ICar | null> {
		const res = await this.cars.get<Array<ICar>>('', {
			params: { id: Number(id) },
		});
		return res.data.length ? res.data[0] : null;
	}
}
