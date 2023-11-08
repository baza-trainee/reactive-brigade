import car from "../assets/hero_car.webp";

const Hero = () => {

	return (
    <section className="box-border max-w-5xl mx-auto px-2 sm:px-14 my-9 text-lime-950 overflow-hidden">
      <h1 className=" text-2xl mb-2 sm:mb-5 sm:text-4xl md:text-5xl text-center font-russo">Збір на позашляховик</h1>
      <h4 className=" text-base sm:text-3xl font-medium text-center uppercase mb-8 sm:mb-72">“Дістанемо кожного!”</h4>
      <p className=' text-sm text-orange-500 mb-36 text-right pr-4 sm:hidden '> <span className="font-russo text-2xl">250 000</span> гривень</p>
			
      <img src={car} alt="car" className="absolute block w-80 top-20 sm:top-0 left-0 right-0 bottom-0 mx-auto z-10 sm:w-auto"/>
      <div className="flex flex-col sm:flex-row text-clip text-center pt-24 sm:text-left gap-5 p-3 sm:pt-32 sm:p-8 text-white rounded-lg bg-lime-900 justify-around items-center relative">
        <div className="">
          <p className="hidden sm:block mb-4 text-2xl font-medium">
            Мета<span className="md:text-4xl sm:text-3xl font-russo">  250 000</span>
          </p>
          <p className="text-sm sm:text-base">
            Наша мета зібрати <span className="font-bold sm:font-normal">250 000</span> гривень для 118 ОМБр підрозділу
            коригування артилерійського вогню
          </p>
        </div>
        <a href="https://www.monobank.com.ua/"
              target="_blank"
              rel="noopener noreferrer" className="sm:mt-8 px-4 py-3 text-base sm:text-lg font-medium uppercase hover:shadow-xl focus:shadow-xl focus:outline-none bg-orange-500 rounded-md flex-shrink-0 inline-block">
          Донат на пікап
        </a>
      </div>

      </section>
  );
};

export default Hero;

//   <section className="box-border max-w-5xl mx-auto px-4 sm:px-14 my-6 sm:my-9 text-lime-950">
//   <h1 className="mb-3 text-3xl sm:text-5xl text-center font-russo">
//     Збір на позашляховик
//   </h1>
//   <h3 className="text-xl sm:text-3xl font-medium text-center uppercase mb-6 sm:mb-12">
//     “Дістанемо кожного!”
//   </h3>

//   <img
//     src={car}
//     alt="car"
//     className="absolute block top-0 left-0 right-0 bottom-0 mx-auto z-10 w-full h-full object-cover"
//   />
  
//   <div className="flex flex-col sm:flex-row gap-5 pt-16 sm:pt-32 pb-4 sm:pb-8 text-white rounded-lg px-4 sm:px-8 bg-lime-900 justify-center items-center relative">
//     <div className="text-center sm:text-left">
//       <p className="mb-2 text-lg sm:text-2xl font-medium">
//         Мета<span className="text-2xl sm:text-4xl font-russo">  250 000</span>
//       </p>
//       <p className="text-base">
//         Наша мета зібрати 250 000 гривень для 118 ОМБр підрозділу
//         коригування артилерійського вогню
//       </p>
//     </div>
    
//     <a
//       href="https://www.monobank.com.ua/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="mt-4 sm:mt-0 h-12 sm:h-15 px-4 py-3 text-base sm:text-lg font-medium uppercase bg-orange-500 rounded-md flex-shrink-0 inline-block"
//     >
//       Донат на пікап
//     </a>
//   </div>
// </section>
