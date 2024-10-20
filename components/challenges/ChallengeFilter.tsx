import React, { useState } from "react";

interface Tag {
  slug: string;
  title: string;
  text: string;
}

interface ChallengeFilterProps {
  tags: Tag[];
}

const ChallengeFilter: React.FC<ChallengeFilterProps> = ({ tags }) => {
  const [selectedTag, setSelectedTag] = useState<string>();

  return (
    <div>
      <div className="p-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.slug}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === tag.slug
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedTag(tag.slug)}
          >
            {tag.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChallengeFilter;
