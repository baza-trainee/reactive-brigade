import { FaTimes } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Modal = ({ isModalOpen, setIsModalOpen }) => {
	return (
		<div
			className={
				isModalOpen
					? 'block'
					: 'hidden'
			}>
			<div className='rounded bg-orange w-[90vw] h-[20vh] max-w-xl text-center grid place-items-center relative'>
				<h3>modal content</h3>
				<button
					onClick={() => {
						setIsModalOpen(false);
					}}>
					<FaTimes size={30} />
				</button>
			</div>
		</div>
	);
};

export default Modal;
