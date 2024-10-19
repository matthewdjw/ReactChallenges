import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import CodeEditor from '../../components/code-editor/CodeEditor';
import Navbar from '../../components/common/Navbar';
import ChallengeDetails from '../../components/challenges/ChallengeDetails'

interface Challenge {
  slug: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  solution: string;
}

interface ChallengePageProps {
  challenge: Challenge;
}

export default function ChallengePage({ challenge }: ChallengePageProps) {
  return (
    <div>
		<Navbar/>
		<div className="p-4">
			<CodeEditor />
		</div>
		<ChallengeDetails challenge={challenge} />
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
	const filePath = path.join(process.cwd(), 'public/data/challenges', 'challenge-sample.json');
	const jsonData = fs.readFileSync(filePath);
	const challenges: Challenge[] = JSON.parse(jsonData.toString());

	const paths = challenges.map((challenge) => ({
		params: { slug: challenge.slug.toString() }
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const filePath = path.join(process.cwd(), 'public/data/challenges', 'challenge-sample.json');
	const jsonData = fs.readFileSync(filePath);
	const challenges: Challenge[] = JSON.parse(jsonData.toString());
	const challenge = challenges.find((ch) => ch.slug === params?.slug);

	return {
		props: {
			challenge: challenge
		}
	};
};
