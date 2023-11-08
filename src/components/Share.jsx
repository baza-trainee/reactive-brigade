import { LiaFacebookF, LiaLinkedinIn, LiaTelegram } from 'react-icons/lia';

import shareImg from '../assets/share.jpg';

// eslint-disable-next-line react/prop-types
const Share = ({ setIsModalOpen }) => {
	return (
		<section className='flex max-w-5xl mx-auto w-[90vw] md:w-full md:mb-16 mb-11'>
			<div className='flex-1 pt-5 pb-3 text-center text-white rounded md:text-start bg-orange md:rounded-s md:pl-16 md:pt-16 md:pb-8 md:rounded-none'>
				<h2 className='mb-2 font-heading md:text-7xl z-10 md:mr-[-300px]'>
					В ЄДНАННІ - СИЛА!
				</h2>
				<h3 className='text-sm md:text-2xl'>
					Розповідай друзям про збір
				</h3>
				<p className='my-5 text-xs text-black md:text-base'>
					Наближай перемогу
				</p>
				<div className='flex flex-col items-center gap-3 mt-3 md:gap-8 md:flex-row'>
					<button
						className='px-4 py-3 font-medium rounded bg-green'
						onClick={() => {
							setIsModalOpen(true);
						}}>
						ПОДІЛИТИСЬ
					</button>
					<div className='flex justify-center gap-4'>
						<a
							href='http://facebook.com'
							target='_blank'
							rel='noopener noreferrer'>
							<LiaFacebookF
								size={30}
								className='p-1 bg-blue-900'
							/>
						</a>
						<a
							href='http://web.telegram.org'
							target='_blank'
							rel='noopener noreferrer'>
							<LiaTelegram size={30} className='p-1 bg-sky-500' />
						</a>
						<a
							href='http://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'>
							<LiaLinkedinIn
								size={30}
								className='p-1 bg-blue-900'
							/>
						</a>
					</div>
				</div>
			</div>
			<div className='hidden md:block z-[-10] '>
				<img
					src={shareImg}
					alt='vehicle'
					className='block object-cover w-full h-auto'
				/>
			</div>
		</section>
	);
};

export default Share;
