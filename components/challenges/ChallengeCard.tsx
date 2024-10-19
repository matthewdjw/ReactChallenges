import React, { FC } from 'react';

interface Challenge {
	slug: string;
	title: string;
	description: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	tags: string[];
	solution: string;
}

interface ChallengeCardProps {
	challenge: Challenge;
}

const ChallengeCard: FC<ChallengeCardProps> = ({ challenge }) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-6 m-4">
			<h2 className="text-2xl font-bold text-gray-800 mb-2">{challenge.title}</h2>
			<p className="text-sm text-gray-600 mb-2">
				<span className="font-semibold">Difficulty: </span>
				<span
					className={`${challenge.difficulty === 'Easy'
						? 'text-green-500'
						: challenge.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}
				>
					{challenge.difficulty}
				</span>
			</p>
			<p className="text-sm text-gray-600">
				<span className="font-semibold">Tags: </span>
				<span className="text-blue-500">{challenge.tags.join(', ')}</span>
			</p>
		</div>
	);
};

export default ChallengeCard;
