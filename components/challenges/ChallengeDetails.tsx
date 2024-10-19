import React, { FC, useState } from 'react';
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
	const [ showSolution, setShowSolution ] = useState<Boolean>(false);
	return (
		<div className="p-4 text-white">
			<h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
			<p className="text-lg  mb-6">{challenge.description}</p>
			<div className="relative">
				<button onClick={() => setShowSolution((prev) => !prev)} className="absolute inset-0 m-auto z-10">
					{!showSolution && 'Show Solution'}
				</button>
				<div className={`relative rounded-md overflow-hidden ${!showSolution ? 'blur-lg' : 'blur-none'}`}>
					<SyntaxHighlighter language="javascript" style={dark} customStyle={{ margin: 0, padding: '1rem', background: 'none' }}>
						{challenge.solution}
					</SyntaxHighlighter>
				</div>
			</div>
		</div>
	);
};

export default ChallengeDetails;
