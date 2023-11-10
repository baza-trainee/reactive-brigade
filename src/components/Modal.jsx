import { FaCheck, FaTimes } from 'react-icons/fa';
import { LiaFacebookF, LiaLinkedinIn, LiaTelegram } from 'react-icons/lia';
import { useEffect, useState } from 'react';

import { GoShareAndroid } from 'react-icons/go';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#F7732A',
		padding: '3rem',
	},
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
};
Modal.setAppElement('#root');

const ModalComponent = ({ isModalOpen, closeModal }) => {
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		if (isModalOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isModalOpen]);

	const currentUrl = window.location.href;
	const copyToClipboard = () => {
		if (isCopied) return;

		navigator.clipboard
			.writeText(currentUrl)
			.then(() => {
				setIsCopied(true);

				setTimeout(() => {
					closeModal();
					setIsCopied(false);
				}, 3000);
			})
			.catch((err) => {
				console.error(`Failed to copy: ${err}`);
			});
	};

	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Modal'>
			<section className='relative text-center text-white'>
				<h3 className='text-xl font-semibold md:text-3xl'>
					Поділіться сайтом з друзями!
				</h3>
				<div className='mb-4 border-t border-gray-300'></div>
				<div className=''>
					<p className='max-w-xs mx-auto md:text-xl'>
						Надіслати посилання на сайт через соціальні мережі
					</p>
					<div className='flex justify-center gap-8 my-8'>
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
								currentUrl
							)}`}
							target='_blank'
							rel='noopener noreferrer'
							className='p-1 duration-300 bg-blue-800 hover:shadow hover:shadow-slate-200'>
							<LiaFacebookF size={30} />
						</a>
						<a
							href={`https://t.me/share/url?url=${encodeURIComponent(
								currentUrl
							)}`}
							target='_blank'
							rel='noopener noreferrer'
							className='p-1 duration-300 bg-sky-500 hover:shadow hover:shadow-slate-200'>
							<LiaTelegram size={30} />
						</a>
						<a
							href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
								currentUrl
							)}`}
							target='_blank'
							rel='noopener noreferrer'
							className='p-1 duration-300 bg-blue-800 hover:shadow hover:shadow-slate-200'>
							<LiaLinkedinIn size={30} />
						</a>
					</div>
					<p className='mb-4'>Або скопіюйте посилання</p>
					<button
						className='flex items-center gap-4 px-4 py-3 mx-auto font-medium duration-300 rounded bg-green hover:shadow hover:shadow-slate-200'
						onClick={copyToClipboard}>
						Скопіюйте посилання
						<GoShareAndroid size='20' />
					</button>
					{isCopied && (
						<p className='flex justify-center gap-4 mt-4'>
							Скопійовано
							<FaCheck size='30' />
						</p>
					)}
				</div>
				<button
					onClick={closeModal}
					className='absolute top-[-2rem] right-[-2rem]'>
					<FaTimes size={30} />
				</button>
			</section>
		</Modal>
	);
};

ModalComponent.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default ModalComponent;
