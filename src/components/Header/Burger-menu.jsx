const BurgerMenu = (props) => {
    let burgerMenuClass = 'fixed top-0 left-0 z-20 w-full h-screen translate-x-full bg-lime-900 transition-all duration-500';

    props.menuOpen 
    ? burgerMenuClass = 'fixed top-0 left-0 z-20 w-full h-screen translate-x-0 bg-lime-900 transition-all duration-500' 
    : burgerMenuClass = 'fixed top-0 left-0 z-20 w-full h-screen translate-x-full bg-lime-900 transition-all duration-500';
    
    return (
        <>
            <div className={burgerMenuClass}>
                <div className="mx-auto max-w-230px">
                    <nav className="mt-24">
                        <ul className="flex flex-col items-center gap-y-6">
                            <li className="w-full pb-3 text-center text-white border-b-2 border-white"><span className="text-3xl font-normal text-white font-heading">Наша мета</span></li>
                            <li className="w-full pb-3 text-center text-white border-b-2 border-white"><span className="text-3xl font-normal text-white font-heading">Про бригаду</span></li>
                            <li className="w-full pb-3 text-center text-white border-b-2 border-white" ><span className="text-3xl font-normal text-white font-heading">Чому це важливо</span></li>
                        </ul>
                    </nav>
                    <div className="block mt-8 text-center md:hidden">
                        <button className="py-4 mx-auto text-3xl text-white bg-orange-500 rounded px-7 font-body" type="button">ДОНАТИТИ</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BurgerMenu;