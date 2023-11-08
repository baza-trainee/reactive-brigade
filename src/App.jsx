import Header from './components/Header/Header';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Important from './components/Important';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';

const App = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Hero />
			<ProgressBar />
			<About />
			<Important />
			<Footer />
		</>
	);
};

export default App;
