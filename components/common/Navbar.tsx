import React, { FC } from 'react';
import Link from 'next/link';
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	return (
		<nav className="p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="space-x-6">
					<Link href="/" className="text-gray-300 hover:text-white">
						Home
					</Link>
					<Link href="/challenges" className="text-gray-300 hover:text-white">
						Challenges
					</Link>
				</div>

				{/* Call to action button */}
				<a href="#" className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
					Sign In
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
