import React, { useState } from 'react';

interface Category {
  slug: string;
  name: string;
  tags: string[];
}

interface ChallengeFilterProps {
  categories: Category[];
}

const ChallengeFilter: React.FC<ChallengeFilterProps> = ({ categories }) => {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>();

  return (
    <div>

      <div className="p-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.slug}
            className={`px-4 py-2 rounded-full text-white ${selectedCategory === category.slug ? 'bg-blue-600' : 'bg-gray-600'}`}
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="p-4 flex flex-wrap gap-2">
          {categories
            .find((category) => category.slug === selectedCategory)
            ?.tags.map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag ? 'bg-green-600 text-white' : 'bg-gray-300 text-black'}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeFilter;
