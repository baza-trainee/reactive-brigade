import { IconFire } from '../assets/important/icon-fire';
import { IconKnife } from '../assets/important/icon-knife';
import { IconQuestion } from '../assets/important/icon-question';
import { IconShield } from '../assets/important/icon-shield';
import backgroundImageUrl from '../assets/important/background-important.webp';

const Important = () => {
	return (
		<section id='important'>
			<h3 className='text-3xl font-semibold text-center text-black sm:mb-14 mb-5 sm:text-5xl lg:text-7xl w-[80vw] mx-auto'>
				Чому це важливо <span className='text-orange'>?</span>
			</h3>

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
				className='h-[140px] bg-cover bg-center max-w-5xl md:min-h-[450px] mb-11 mx-auto'
				style={{ backgroundImage: `url("${backgroundImageUrl}")` }}>
				<div className='max-w-4xl'>
					<div className='w-full p-7 sm:p-5 '>
						<p className='font-bold text-white sm:text-2xl md:max-w-lg md:pl-11'>
							Підтримавши цей благодійний проект, ти наближаєш
							нашу армію до перемоги
						</p>
					</div>

					<div className='items-stretch hidden max-w-4xl py-5 mt-4 font-semibold text-center text-black bg-white bg-opacity-60 md:flex rounded-e-xl'>
						<div className='flex flex-col items-center pr-8 border-r border-black md:pl-16'>
							<IconQuestion color='#F7732A' />
							<p className='pt-7'>
								Неперевершена майстерність в боротьбі із ворогом
							</p>
						</div>
						<div className='flex flex-col items-center px-8 border-r border-black'>
							<IconFire color='#F7732A' />
							<p className='pt-7'>
								Потужність в руках справжніх захисників
							</p>
						</div>
						<div className='flex flex-col items-center px-8 border-r border-black'>
							<IconShield color='#F7732A' />
							<p className='pt-7'>
								Завдання – знищити ворога, зберегти мир
							</p>
						</div>
						<div className='flex flex-col items-center px-8'>
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
