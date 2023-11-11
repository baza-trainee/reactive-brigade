import { Link } from 'react-scroll';

const BurgerMenu = (props) => {
    let burgerMenuClass = 'fixed top-0 left-0 z-20 w-full h-screen translate-x-full bg-green transition-all duration-500';

    props.menuOpen
        ? burgerMenuClass = 'fixed top-0 left-0 z-20 w-full h-screen translate-x-0 bg-green transition-all duration-500'
        : burgerMenuClass = 'fixed top-0 left-0 z-20 w-full h-screen translate-x-full bg-green transition-all duration-500';

    return (
        <>
            <div className={burgerMenuClass}>
                <div className="mx-auto max-w-230px">
                    <nav className="mt-24">
                        <ul className="flex flex-col items-center gap-y-6">
                            <li className="w-full pb-3 text-center text-white border-b-2 border-white">
                                <Link
                                    duration={500}
                                    to="goal"
                                    aria-label="Move to Goal section"
                                >
                                    <span className="text-3xl font-normal text-white font-heading">Наша мета</span>
                                </Link>
                            </li>
                            <li className="w-full pb-3 text-center text-white border-b-2 border-white">
                                <Link
                                    duration={500}
                                    to="about"
                                    aria-label="Move to about section"
                                >
                                    <span className="text-3xl font-normal text-white font-heading">Про бригаду</span>
                                </Link>
                            </li>
                            <li className="w-full pb-3 text-center text-white border-b-2 border-white" >
                                <Link
                                    to="important"
                                    duration={500}
                                    aria-label="Move to important section"
                                >
                                    <span className="text-3xl font-normal text-white font-heading">Чому це важливо</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="block mt-8 text-center md:hidden">
                        <button className="py-4 mx-auto text-3xl text-white rounded bg-orange px-7 font-body" type="button">ДОНАТИТИ</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BurgerMenu;
