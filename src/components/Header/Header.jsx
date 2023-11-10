import BurgerMenu from './Burger-menu';
import logo from '../../assets/header/logo.svg'
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    let burgerClass = `relative z-30 block w-8 h-6 after:right-0 after:absolute after:w-full after:h-0.5 after:bg-orange after:content-[''] before:right-0 before:absolute before:w-full before:h-0.5 before:bg-white before:content-[''] after:bottom-0  before:top-0 md:hidden`;

    let burgerSpanClass = 'right-0 w-full h-0.5 bg-orange absolute top-1/2 transform -translate-y-1/2';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    menuOpen
        ? burgerClass = `relative z-30 block w-8 h-6 after:right-0 after:absolute after:w-full after:h-0.5 after:bg-orange after:content-[''] before:right-0 before:absolute before:w-full before:h-0.5 before:bg-orange before:content-[''] after:bottom-0  before:top-0 md:hidden after:bottom-1/2 before:top-1/2 after:transform before:transform before:-translate-y-1/2 after:rotate-45 before:-rotate-45`
        : burgerClass = `relative z-30 block w-8 h-6 after:right-0 after:absolute after:w-full after:h-0.5 after:bg-orange after:content-[''] before:right-0 before:absolute before:w-full before:h-0.5 before:bg-orange before:content-[''] after:bottom-0  before:top-0 md:hidden`;

    menuOpen
        ? burgerSpanClass = 'right-0 w-0 h-0.5 bg-orange absolute top-1/2 transform -translate-y-1/2'
        : burgerSpanClass = 'right-0 w-full h-0.5 bg-orange absolute top-1/2 transform -translate-y-1/2';

    return (
        <>
            <header className="bg-green">
                <div className="flex items-center max-w-3xl px-4 mx-auto md:gap-x-6 lg:max-w-5xl lg:gap-x-20 gap-x-0">
                    <div className="py-1.5 grow">
                        <img src={logo} alt="" />
                    </div>
                    <nav className="hidden py-3 md:block">
                        <ul className="flex gap-x-8">
                            <li className="text-lg font-normal text-white font-heading">Наша мета</li>
                            <li className="text-lg font-normal text-white font-heading">Про бригаду</li>
                            <li className="text-lg font-normal text-white font-heading">Чому це важливо</li>
                        </ul>
                    </nav>
                    <div className="relative hidden after:bg-orange after:block after:absolute after:inset-1 after:w-36 after:h-8 after:blur-none after:hover:blur-md md:block">
                        <button className="relative z-30 py-2 text-lg text-white rounded bg-orange px-7 font-body" type="button">ДОНАТИТИ</button>
                    </div>
                    <div onClick={() => toggleMenu()}
                        className={burgerClass}>
                        <span className={burgerSpanClass}></span>
                    </div>
                </div>
                <BurgerMenu menuOpen={menuOpen}/>
            </header>
        </>
    );
};

export default Header;
