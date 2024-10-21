import fs from "fs";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import CodeEditor from "../../components/code-editor/CodeEditor";
import Navbar from "../../components/common/Navbar";
import ChallengeDetails from "../../components/challenges/ChallengeDetails";
import { supabase } from "../../lib/supabaseClient";

interface Challenge {
  slug: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string;
  solution: string;
  starter: string;
}

interface ChallengePageProps {
  challenge: Challenge;
}

export default function ChallengePage({ challenge }: ChallengePageProps) {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <CodeEditor challenge={challenge} />
      </div>
      <ChallengeDetails challenge={challenge} />
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: challenges, error } = await supabase
    .from("challenges")
    .select("slug");

  if (error) {
    console.error("Error fetching slugs from Supabase:", error);
    return { paths: [], fallback: false };
  }

  const paths = challenges.map((challenge) => ({
    params: { slug: challenge.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const { data: challenge, error } = await supabase
    .from("challenges")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching challenge from Supabase:", error);
    return { notFound: true };
  }

  return {
    props: {
      challenge,
    },
  };
};
