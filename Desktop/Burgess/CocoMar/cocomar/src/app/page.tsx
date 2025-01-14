import Logo from '@/components/assets/logo';
import SpikyCircle from '@/components/assets/spiky-circle';
import SignUpForm from '@/components/forms/sign-up-form';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<div className="bg-coco-violet-light p-4 min-h-screen flex flex-col items-stretch">
				<section className="flex-1 grow bg-white rounded-3xl h-full flex flex-col items-center justify-center gap-8 sm:gap-12 p-4">
					<div className="flex max-md:flex-col md:items-center justify-center gap-8 sm:gap-12 sm:mx-12">
						<div className="w-full md:hidden max-w-36">
							<Logo className="fill-coco-violet-medium" />
						</div>
						<div className="hidden md:block lg:hidden">
							<div className="rounded-3xl bg-coco-violet-medium text-center text-3xl p-2 min-w-72 max-w-80">
								<div className="text-white">Keep Strong</div>
								<div className="bg-white rounded-2xl p-6 my-2 ">
									<Logo className="fill-coco-purple-light" />
								</div>
								<div className="text-white">Keep Fresh</div>
							</div>
						</div>
						<div className="hidden lg:block">
							<SpikyCircle
								width={500}
								waveCount={13}
								waveHeightPercentage={2.5}
								className=" fill-coco-violet-medium stroke-coco-purple-light stroke-[10px] ">
								<div className="max-w-64 w-full mb-4 stroke-none">
									<Logo className="fill-white" />
								</div>
							</SpikyCircle>
						</div>
						{/* <div className="hidden md:block lg:hidden">
							<SpikyCircle
								width={400}
								waveCount={13}
								waveHeightPercentage={2.5}
								className=" fill-coco-violet-medium stroke-coco-purple-light stroke-[10px] ">
								<div className="max-w-52 w-full mb-4 stroke-none">
									<Logo className="fill-white" />
								</div>
							</SpikyCircle>
						</div>
						<div className="md:hidden">
							<SpikyCircle
								width={250}
								waveCount={13}
								waveHeightPercentage={2.5}
								className=" fill-coco-violet-medium stroke-coco-purple-light stroke-[8px] ">
								<div className="max-w-32 w-full mb-2 stroke-none">
									<Logo className="fill-white" />
								</div>
							</SpikyCircle>
						</div> */}
						<div className="space-y-8 sm:space-y-12">
							<div className="space-y-4">
								<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] text-left">
									<div className="text-sky-400">Coconut</div>
									<div className="text-sky-400">
										Water <span className="text-amber-400">Based</span>
									</div>
									<div className="text-amber-400">Protein Shakes</div>
								</h1>
								<p className="max-w-[50ch] text-lg text-coco-violet-dark">
									CocoMar offers the first coconut water-based protein shake,
									bringing authentic Brazilian flavors to your fitness routine.
								</p>
							</div>
							<div className="space-y-2">
								<h2 className="text-xl text-left text-coco-violet-dark">
									Sign up for updates
								</h2>
								<div className="max-w-sm">
									<SignUpForm />
								</div>
							</div>
						</div>
					</div>
					{/* <div className="flex flex-col items-center gap-6">
						<div className="space-y-4">
							<h2 className="text-2xl text-center text-coco-violet-dark">
								Sign up for updates
							</h2>
							<div className="max-w-sm -ml-1">
								<SignUpForm />
							</div>
						</div>
					</div> */}
				</section>
			</div>
		</main>
	);
}
