import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const BurgerMenu = (props) => {
	let burgerMenuClass =
		'fixed top-0 left-0 z-40 w-full h-screen translate-x-full bg-green transition-all duration-500';

	props.isMenuOpen
		? (burgerMenuClass =
				'fixed top-0 left-0 z-40 w-full h-screen translate-x-0 bg-green transition-all duration-500')
		: (burgerMenuClass =
				'fixed top-0 left-0 z-40 w-full h-screen translate-x-full bg-green');

	return (
		<>
			<div className={burgerMenuClass}>
				<div className='mx-auto max-w-230px'>
					<nav className='mt-24'>
						<ul className='flex flex-col items-center gap-y-6'>
							<li className='w-full pb-3 text-center text-white border-b-2 border-white'>
								<Link
									onClick={() => {
										props.setIsMenuOpen(!props.isMenuOpen);
									}}
									to='goal'
									duration={500}
									aria-label='Move to Goal section'>
									<span className='text-3xl font-normal text-white font-heading'>
										Наша мета
									</span>
								</Link>
							</li>
							<li className='w-full pb-3 text-center text-white border-b-2 border-white'>
								<Link
									onClick={() => {
										props.setIsMenuOpen(!props.isMenuOpen);
									}}
									to='about'
									duration={500}
									aria-label='Move to about section'>
									<span className='text-3xl font-normal text-white font-heading'>
										Про бригаду
									</span>
								</Link>
							</li>
							<li className='w-full pb-3 text-center text-white border-b-2 border-white'>
								<Link
									onClick={() => {
										props.setIsMenuOpen(!props.isMenuOpen);
									}}
									to='important'
									duration={500}
									aria-label='Move to important section'>
									<span className='text-3xl font-normal text-white font-heading '>
										Чому це важливо
									</span>
								</Link>
							</li>
						</ul>
					</nav>
					<div className='block mt-16 text-center md:hidden'>
						<a
							href='https://send.monobank.ua/jar/5wMdvn59S'
							target='_blank'
							rel='noopener noreferrer'
							className='py-4 mx-auto text-3xl text-white rounded bg-orange px-7 font-body focus:outline-none'>
							ДОНАТИТИ
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

BurgerMenu.propTypes = {
	isMenuOpen: PropTypes.bool.isRequired,
	setIsMenuOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
