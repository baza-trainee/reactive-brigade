import backgroundImageUrl from "../assets/important/backgroud-important.webp";
import { IconFire } from "../assets/important/icon-fire";
import { IconKnife } from "../assets/important/icon-knife";
import { IconQuestion } from "../assets/important/icon-question";
import { IconShield } from "../assets/important/icon-shield";

const Important = () => {
  return (
    <section>
      <div className='flex flex-col w-[275px] m-auto sm:flex-row sm:w-full sm:justify-center sm:pb-5'>
        <h3 className='text-3xl font-bold uppercase lg:text-7xl'>
          чому це&nbsp;
        </h3>
        <div className='flex self-end font-bold text-center'>
          <h3 className='text-3xl font-bold uppercase lg:text-7xl'>важливо</h3>
          <h3 className='pl-2 text-3xl font-bold uppercase text-orange lg:text-7xl'>
            ?
          </h3>
        </div>
      </div>

      <div className='flex flex-col items-center p-5 bg-orange m-7 sm:hidden rounded-xl'>
        <div className='flex flex-col items-center p-3 max-w-[160px]'>
          <IconQuestion color='white' />
          <p className='mt-5 text-sm text-center'>
            Максимізація ефективності у знищенні ворога.
          </p>
        </div>
        <div className='flex flex-col items-center p-3 max-w-[160px]'>
          <IconFire color='white' />
          <p className='mt-5 text-sm text-center'>
            Максимізація ефективності у знищенні ворога.
          </p>
        </div>
        <div className='flex flex-col items-center p-3 max-w-[160px]'>
          <IconShield color='white' />
          <p className='mt-5 text-sm text-center'>
            Максимізація ефективності у знищенні ворога.
          </p>
        </div>
      </div>

      <div
        className='h-[140px] bg-cover bg-center w-full sm:h-[450px] mb-10'
        style={{ backgroundImage: `url("${backgroundImageUrl}")` }}
      >
        <div className='max-w-4xl xl:mx-auto'>
          <div className='flex items-center self-center w-full p-7 sm:p-5'>
            <p className='font-bold text-[16px] text-white sm:text-[24px] sm:w-[418px] sm:self-start'>
              Підтримавши цей благодійний проект ти наближаєш нашу армію до
              перемоги
            </p>
          </div>

          <div className='flex bg-white max-w-4xl max-sm:hidden border-r-2 mt-4 h-[191px] items-center rounded-e-xl opacity-80 xl:rounded-xl'>
            <div className='flex flex-col items-center p-3 border-r-2 border-gray-400'>
              <IconQuestion color='orange' />
              <p className='text-center text-black pt-7'>
                Максимізація ефективності у знищенні ворога.
              </p>
            </div>
            <div className='flex flex-col items-center p-3'>
              <IconFire color='orange' />
              <p className='text-center text-black pt-7'>
                Максимізація ефективності у знищенні ворога.
              </p>
            </div>
            <div className='flex flex-col items-center p-3 border-gray-400 border-x-2'>
              <IconShield color='orange' />
              <p className='text-center text-black pt-7'>
                Максимізація ефективності у знищенні ворога.
              </p>
            </div>
            <div className='flex flex-col items-center p-3'>
              <IconKnife color='orange' />
              <p className='text-center text-black pt-7'>
                Максимізація ефективності у знищенні ворога.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Important;
