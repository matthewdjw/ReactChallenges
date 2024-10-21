import ChallengeCard from "@/components/challenges/ChallengeCard";
import Navbar from "@/components/common/Navbar";
import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next";
import Link from "next/link";
import ChallengeFilter from "@/components/challenges/ChallengeFilter";
import { supabase } from "@/lib/supabaseClient";
import React, { useState } from "react";

interface Challenge {
  slug: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string;
  solution: string;
}

interface Tag {
  slug: string;
  title: string;
  text: string;
}

interface ChallengesPageProps {
  challenges: Challenge[];
  tags: Tag[];
}

const Challenges: React.FC<ChallengesPageProps> = ({ challenges, tags }) => {
  const [selectedTag, setSelectedTag] = useState<string>();
  return (
    <div>
      <Navbar />
      <ChallengeFilter
        tags={tags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      {challenges
        .filter((challenge) =>
          selectedTag ? challenge.tags.split(",").includes(selectedTag) : true
        )
        .map((challenge) => (
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
  const { data: challenges, error } = await supabase
    .from("challenges")
    .select("*");
  if (error) {
    console.error("Error fetching challenges from Supabase:", error);
    return { props: { challenges: [], tags: [] } };
  }
  // Fetching the categories data
  const tagFilePath = path.join(
    process.cwd(),
    "public/data/challenges",
    "category-sample.json"
  );
  const tagJsonData = fs.readFileSync(tagFilePath);
  const tags = JSON.parse(tagJsonData.toString());

  return {
    props: {
      challenges,
      tags,
    },
  };
};

export default Challenges;
