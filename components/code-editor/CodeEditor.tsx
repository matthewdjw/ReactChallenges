import React, { FC } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

interface Challenge {
  title: string;
  description: string;
  starter: string;
}

interface CodeEditorProps {
  challenge: Challenge;
}

const CodeEditor: FC<CodeEditorProps> = ({ challenge }) => {
  return (
    <Sandpack
      template="react"
      theme="auto"
      files={{
        "/App.js": `${challenge.starter}`,
      }}
    />
  );
};

export default CodeEditor;
