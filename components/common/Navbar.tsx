import React, { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	return (
		<nav className="p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="space-x-6">
					<a href="#" className="text-gray-300 hover:text-white">
						Home
					</a>
					<a href="#" className="text-gray-300 hover:text-white">
						Challenges
					</a>
					<a href="#" className="text-gray-300 hover:text-white">
						About
					</a>
					<a href="#" className="text-gray-300 hover:text-white">
						Contact
					</a>
				</div>

				{/* Call to action button */}
				<a href="#" className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
					Get Started
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
