import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import Important from './components/Important';
import ProgressBar from './components/ProgressBar';
import Share from './components/Share';

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<ProgressBar />
			<About />
			<Important />
			<Share />
			<Footer />
		</>
	);
};

export default App;
