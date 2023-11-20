import car from "../assets/hero_car.webp";

const Hero = () => {
  return (
    <section className="relative max-w-4xl mx-auto overflow-hidden text-black my-9 w-[90vw]">
      <h1 className="mb-2 text-2xl text-center sm:mb-5 sm:text-4xl md:text-5xl font-heading">
        Збір на позашляховик
      </h1>
      <h4 className="mb-8 font-medium text-center uppercase sm:text-3xl sm:mb-72">
        “Дістанемо кожного!”
      </h4>
      <p className="pr-4 text-sm text-right text-orange mb-36 sm:hidden">
       <span className="text-2xl font-heading">250 000</span> гривень
      </p>
      <img
        src={car}
        alt="car"
        className="absolute bottom-0 left-0 right-0 z-20 block mx-auto w-80 top-6 sm:top-20 md:-top-16 sm:w-96 md:w-auto "
      />
      <div className="absolute z-10 w-4/5 bg-gray-900 rounded-full h-1/5 md:w-3/5 md:h-1/4 bg-opacity-40 blur-xl -rotate-6 top-64 left-16 sm:top-96 sm:left-24 md:left-56" ></div>
      <div className="flex flex-col items-center justify-around gap-5 p-3 pt-24 text-center text-white rounded-lg sm:flex-row text-clip sm:text-left sm:pt-32 sm:p-8 bg-green">
        <div className="relative z-30">
          <p className="hidden mb-4 text-2xl font-medium sm:block">Мета
            <span className="md:text-4xl sm:text-3xl font-heading"> 250 000 грн</span>
          </p>
          <p className="text-sm sm:text-base">
            Наша мета зібрати
            <span className="font-bold sm:font-normal"> 250 000</span> гривень
            для 118 ОМБр підрозділу коригування артилерійського вогню
          </p>
        </div>
        <a
          href="https://send.monobank.ua/jar/5wMdvn59S"
          target="_blank"
          rel="noopener noreferrer"
          className="z-30 flex-shrink-0 px-4 py-3 font-medium uppercase duration-300 rounded-md sm:mt-8 sm:text-lg focus:shadow-xl focus:outline-none bg-orange hover:shadow-inner hover:shadow-slate-200"
        >
          Донат на пікап
        </a>
      </div>
    </section>
  );
};

export default Hero;
