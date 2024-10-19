import React, { FC } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

interface CodeEditorProps {}

const CodeEditor: FC<CodeEditorProps> = ({}) => {
	return <Sandpack template="react" />;
};

export default CodeEditor;
