import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Important from './components/Important';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Share from './components/Share';
import { useState } from 'react';

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<Navbar />
			<Hero />
			<ProgressBar />
			<About />
			<Important />
			<Share setIsModalOpen={setIsModalOpen}/>
			<Footer />
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
		</>
	);
};

export default App;
