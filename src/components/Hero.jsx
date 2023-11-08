import car from "../assets/hero_car.webp";

const Hero = () => {
  return (
    <section className="box-border max-w-5xl px-2 mx-auto overflow-hidden text-black sm:px-14 my-9">
      <h1 className="mb-2 text-2xl text-center sm:mb-5 sm:text-4xl md:text-5xl font-heading">
        Збір на позашляховик
      </h1>
      <h4 className="mb-8 text-base font-medium text-center uppercase sm:text-3xl sm:mb-72">
        “Дістанемо кожного!”
      </h4>
      <p className="pr-4 text-sm text-right text-orange mb-36 sm:hidden">
       <span className="text-2xl font-heading">250 000</span> гривень
      </p>
      <img
        src={car}
        alt="car"
        className="absolute bottom-0 left-0 right-0 z-10 block mx-auto w-80 top-20 sm:top-0 sm:w-auto"
      />
      <div className="relative flex flex-col items-center justify-around gap-5 p-3 pt-24 text-center text-white rounded-lg sm:flex-row text-clip sm:text-left sm:pt-32 sm:p-8 bg-green">
        <div>
          <p className="hidden mb-4 text-2xl font-medium sm:block">
            Мета
            <span className="md:text-4xl sm:text-3xl font-heading">
              {" "}
              250 000
            </span>
          </p>
          <p className="text-sm sm:text-base">
            Наша мета зібрати{" "}
            <span className="font-bold sm:font-normal">250 000</span> гривень
            для 118 ОМБр підрозділу коригування артилерійського вогню
          </p>
        </div>
        <a
          href="https://www.monobank.com.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-3 text-base font-medium uppercase rounded-md sm:mt-8 sm:text-lg hover:shadow-xl focus:shadow-xl focus:outline-none bg-orange "
        >
          Донат на пікап
        </a>
      </div>
    </section>
  );
};

export default Hero;
