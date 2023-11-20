import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

import BurgerMenu from './Burger-menu';
import { Link } from 'react-scroll';
import logo from '../../assets/header/logo.svg';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	let burgerIcon = 'fixed z-50 block text-orange md:hidden right-9';

	isMenuOpen
		? (burgerIcon = 'fixed z-50 block text-orange md:hidden right-[5%]')
		: (burgerIcon = 'z-50 block text-orange md:hidden');

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header className='bg-green'>
				<div className='relative flex items-center max-w-4xl mx-auto w-[90vw] gap-x-4 justify-between'>
					<div className='flex items-center basis-9/12 gap-x-4'>
						<div className='py-1.5'>
							<img src={logo} alt='' />
						</div>
						<nav className='hidden py-3 md:block grow'>
							<ul className='flex justify-end text-center tablet-850:gap-x-4 gap-x-8'>
								<li className='text-lg font-normal text-white transition-all duration-300 cursor-pointer font-heading hover:text-orange'>
									<Link
										duration={500}
										to='goal'
										aria-label='Move to Goal section'>
										Наша мета
									</Link>
								</li>
								<li className='text-lg font-normal text-white transition-all duration-300 cursor-pointer font-heading hover:text-orange'>
									<Link
										duration={500}
										to='about'
										aria-label='Move to about section'>
										Про бригаду
									</Link>
								</li>
								<li className='text-lg font-normal text-white transition-all duration-300 cursor-pointer font-heading hover:text-orange'>
									<Link
										to='important'
										duration={500}
										aria-label='Move to important section'>
										Чому це важливо
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className='hidden md:block '>
						<a
							href='https://send.monobank.ua/jar/5wMdvn59S'
							target='_blank'
							rel='noopener noreferrer'
							className='py-2 text-lg text-white duration-300 rounded tablet-850:px-4 bg-orange px-7 font-body focus:shadow-xl focus:outline-none hover:shadow-inner hover:shadow-slate-200'>
							ДОНАТИТИ
						</a>
					</div>
					<div className={burgerIcon} onClick={toggleMenu}>
						{isMenuOpen ? (
							<RxCross1 size={25} />
						) : (
							<RxHamburgerMenu size={30} />
						)}
					</div>
				</div>
				<BurgerMenu
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</header>
		</>
	);
};

export default Header;
