import React, { FC } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

interface CodeEditorProps {}

const CodeEditor: FC<CodeEditorProps> = ({}) => {
	return <Sandpack template="react" theme="auto" />;
};

export default CodeEditor;
