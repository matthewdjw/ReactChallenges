import React, { FC } from 'react';

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	return (
		<section>
			<div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
				<div className="space-y-5 max-w-4xl mx-auto text-center">
					<h1 className="text-sm text-indigo-600 font-medium">Level up your React skills</h1>
					<h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
						Master React development with{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
							real-world coding challenges
						</span>
					</h2>
					<p className="max-w-2xl mx-auto">
						Tackle hands-on projects designed to sharpen your skills, from beginner to advanced. Explore challenges covering hooks, state
						management, component design, and more!
					</p>
					<div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
						<a
							href="javascript:void(0)"
							className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
						>
							Explore challenges
						</a>
						<a
							href="javascript:void(0)"
							className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
						>
							Join the community
						</a>
					</div>
				</div>

				<div className="mt-14">
					<img
						src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
						className="w-full shadow-lg rounded-lg border"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
