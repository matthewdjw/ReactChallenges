import React, { useState, FC } from "react";

interface CreateChallengeProps {}

const CreateChallenge: FC<CreateChallengeProps> = ({}) => {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [tags, setTags] = useState<string[]>([]);
  const [solution, setSolution] = useState("");
  const [starter, setStarter] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newChallenge = {
      slug,
      title,
      description,
      difficulty,
      tags,
      solution,
    };

    console.log(newChallenge); //temporarily log
  };

  const handleTagChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newTags = [...tags];
    newTags[index] = e.target.value;
    setTags(newTags);
  };

  const addTagField = () => {
    setTags([...tags, ""]);
  };

  const removeTagField = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create Coding Challenge</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Slug
          </label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="fetch-data-from-api"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Fetch Data from API"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Fetch and display data from an external API using React hooks."
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          {tags.map((tag, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={tag}
                onChange={(e) => handleTagChange(e, index)}
                className="mr-2 p-2 border rounded-md w-full"
                placeholder="e.g., API, fetch, hooks"
              />
              <button
                type="button"
                onClick={() => removeTagField(index)}
                className="bg-red-500 text-white px-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addTagField}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Tag
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Starter
          </label>
          <textarea
            value={starter}
            onChange={(e) => setStarter(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="const DataFetcher = () => { ... }"
            rows={6}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Solution
          </label>
          <textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="const DataFetcher = () => { ... }"
            rows={6}
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Create Challenge
        </button>
      </form>
    </div>
  );
};

export default CreateChallenge;
