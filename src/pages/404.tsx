import Layout from '@/components/layout/Layout';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
const NotFound: NextPage = () => {
	return (
		<Layout title='Not Found'>
			<div style={{ textAlign: 'center' }}>
				<Image
					className={`inline-block`}
					src='/images/page404.webp'
					alt='Not Found page 404'
					width={500}
					height={500}
				/>
			</div>
		</Layout>
	);
};

export default NotFound;
