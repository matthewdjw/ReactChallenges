import React, { useState } from "react";

interface Tag {
  slug: string;
  title: string;
  text: string;
}

interface ChallengeFilterProps {
  tags: Tag[];
  selectedTag: string | undefined;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ChallengeFilter: React.FC<ChallengeFilterProps> = ({
  tags,
  selectedTag,
  setSelectedTag,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="p-4 flex flex-wrap gap-2">
        {tags.slice(0, !expanded ? 10 : tags.length).map((tag) => (
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
        <button
          className="px-3 rounded-full py-1 bg-white text-sm"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {!expanded ? "more..." : "...less"}
        </button>
      </div>
    </div>
  );
};

export default ChallengeFilter;
