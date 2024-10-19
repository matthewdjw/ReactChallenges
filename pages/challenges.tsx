import ChallengeCard from '@/components/challenges/ChallengeCard';
import Navbar from '@/components/common/Navbar';
import fs from 'fs';
import path from 'path';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import ChallengeFilter from '@/components/challenges/ChallengeFilter';

interface Challenge {
	slug: string;
	title: string;
	description: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	tags: string[];
	solution: string;
}

interface Category {
	slug: string;
	name: string;
	tags: string[];
}

interface ChallengesPageProps {
	challenges: Challenge[];
	categories: Category[];
}

const Challenges: React.FC<ChallengesPageProps> = ({ challenges, categories }) => {
	return (
		<div>
			<Navbar />
			<ChallengeFilter categories={categories} />
			{challenges.map((challenge) => (
				<div key={challenge.title}>
					<Link href={`challenges/${challenge.slug}`}>
						<ChallengeCard challenge={challenge} />
					</Link>
				</div>
			))}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	// Fetching the challenges data
	const challengeFilePath = path.join(process.cwd(), 'public/data/challenges', 'challenge-sample.json');
	const challengeJsonData = fs.readFileSync(challengeFilePath);
	const challenges: Challenge[] = JSON.parse(challengeJsonData.toString());

	// Fetching the categories data
	const categoryFilePath = path.join(process.cwd(), 'public/data/challenges', 'category-sample.json');
	const categoryJsonData = fs.readFileSync(categoryFilePath);
	const categories = JSON.parse(categoryJsonData.toString());

	return {
		props: {
			challenges,
			categories
		}
	};
};

export default Challenges;
