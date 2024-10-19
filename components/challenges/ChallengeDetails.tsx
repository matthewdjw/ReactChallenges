import React, { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ChallengeDetailsProps {
	challenge: {
		title: string;
		description: string;
		solution: string;
	};
}

const ChallengeDetails: FC<ChallengeDetailsProps> = ({ challenge }) => {
	return (
		<div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
			<h1 className="text-3xl font-bold text-gray-800 mb-4">{challenge.title}</h1>
			<p className="text-lg text-gray-600 mb-6">{challenge.description}</p>
			<div className="bg-gray-900 text-white rounded-md overflow-hidden">
				<SyntaxHighlighter language="javascript" style={dark} customStyle={{ margin: 0, padding: '1rem', background: 'none' }}>
					{challenge.solution}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default ChallengeDetails;
