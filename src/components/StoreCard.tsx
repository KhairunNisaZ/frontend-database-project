import { FC } from 'react';

interface Store {
	data: {
		store_id: number;
		manager: number;
		street: string;
		city: string;
		state: string;
		country: string;
	};
}
export const StoreCard: FC<Store> = ({ data }) => {
	return (
		<div className='bg-slate-100 p-4 border transition-colors hover:bg-slate-300'>
			<h1 className='text-xl'>Id: {data.store_id}</h1>
			<h2>Manager: {data.manager}</h2>
			<h2>
				Lokasi: {data.street}, {data.city}, {data.state}, {data.country}
			</h2>
		</div>
	);
};
