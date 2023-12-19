import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import { Inter } from 'next/font/google';
import Meta from '../head/Meta';
import { IMeta } from '../head/meta.interface';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--inter' });

const DynamicFooter = dynamic(() => import('./footer/Footer'), { ssr: false });

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
}) => {
	return (
		<Meta title={title} description={description}>
			<div className={inter.variable}>
				<Header />
				<main className='flex flex-col items-center'>{children}</main>
				<DynamicFooter />
			</div>
		</Meta>
	);
};

export default Layout;
