import React, { FC } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

interface Challenge {
	title: string;
	description: string;
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
				'/App.js': `import React, { useState } from 'react'

function App() {
	return (
		<div>
			<h1>Let's get started!</h1>
			<p>You are completing the problem: <u>${challenge.title}</u>.</p>
			<p>Start coding here to see your changes.</p>
		</div>
	)
}
				
export default App;`
			}}
		/>
	);
};

export default CodeEditor;
