import ChallengeCard from '@/components/challenges/ChallengeCard';
import Navbar from '@/components/common/Navbar';
import fs from 'fs';
import path from 'path';
import { GetServerSideProps } from 'next';

interface Challenge {
	title: string;
	description: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	tags: string[];
	solution: string;
}

interface ChallengesPageProps {
	challenges: Challenge[];
}

const Challenges: React.FC<ChallengesPageProps> = ({ challenges }) => {
	return (
		<div>
			<Navbar />
			{challenges.map((challenge) => (
				<div key={challenge.title}>
					<ChallengeCard challenge={challenge} />
				</div>
			))}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const filePath = path.join(process.cwd(), 'public/data/challenges', 'challenge-sample.json');
	const jsonData = fs.readFileSync(filePath);
	const challenges: Challenge[] = JSON.parse(jsonData.toString());
	return {
		props: {
			challenges
		}
	};
};

export default Challenges;
