import backgroundImageUrl from '../assets/important/background-important.webp';
import { IconFire } from '../assets/important/icon-fire';
import { IconKnife } from '../assets/important/icon-knife';
import { IconQuestion } from '../assets/important/icon-question';
import { IconShield } from '../assets/important/icon-shield';

const Important = () => {
	return (
		<section className='md:mb-16 mb-11'>
			<div className='flex flex-col w-[275px] m-auto md:flex-row md:w-full sm:justify-center sm:pb-5 uppercase text-3xl font-bold lg:text-7xl text-black'>
				<h3>
					чому це&nbsp;
				</h3>
				<div className='flex self-end font-bold text-center'>
					<h3>
						важливо
					</h3>
					<h3 className='pl-2 text-orange'>
						?
					</h3>
				</div>
			</div>

			<div className='flex flex-col items-center p-5 bg-orange my-7 md:hidden rounded-xl w-[90vw] mx-auto text-sm text-center min-h-[191px]'>
				<div className='flex flex-col items-center p-3 max-w-[160px] sm:max-w-xs'>
					<IconQuestion color='white' />
					<p className='mt-5'>
						Завдання – знищити ворога, зберегти мир
					</p>
				</div>
				<div className='flex flex-col items-center p-3 max-w-[160px] sm:max-w-xs'>
					<IconFire color='white' />
					<p className='mt-5'>
						Неймовірна потужність в руках справжніх захисників
					</p>
				</div>
				<div className='flex flex-col items-center p-3 max-w-[160px] sm:max-w-xs'>
					<IconShield color='white' />
					<p className='mt-5'>
						Максимізація ефективності у знищенні ворога
					</p>
				</div>
			</div>

			<div
				className='h-[140px] bg-cover bg-center max-w-5xl md:min-h-[450px] mb-14 mx-auto'
				style={{ backgroundImage: `url("${backgroundImageUrl}")` }}>
				<div className='max-w-4xl'>
					<div className='flex items-center self-center w-full p-7 sm:p-5 '>
						<p className='font-bold text-white sm:text-2xl sm:max-w-md sm:self-start md:pl-11'>
							Підтримавши цей благодійний проект ти наближаєш нашу
							армію до перемоги
						</p>
					</div>

					<div
						className='flex items-start max-w-4xl mt-4 text-center text-black bg-white border-r-2 max-md:hidden rounded-e-xl'
						style={{ background: `rgba(255, 255, 255, 0.60)` }}>
						<div className='flex flex-col items-center py-5 pr-8 border-r-2 border-gray-400 md:pl-16'>
							<IconQuestion color='#F7732A' />
							<p className='pt-7'>
								Неперевершена майстерність в боротьбі із ворогом
							</p>
						</div>
						<div className='flex flex-col items-center px-8 py-5'>
							<IconFire color='#F7732A' />
							<p className='pt-7'>
								Потужність в руках справжніх
								захисників
							</p>
						</div>
						<div className='flex flex-col items-center px-8 py-5 border-gray-400 border-x-2'>
							<IconShield color='#F7732A' />
							<p className='pt-7'>
              Завдання – знищити ворога, зберегти мир
							</p>
						</div>
						<div className='flex flex-col items-center px-8 py-5'>
							<IconKnife color='#F7732A' />
							<p className='pt-7'>
								Максимізація ефективності у знищенні ворогів
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Important;
