import MonacoEditor from '@monaco-editor/react';
import React from 'react';
import styles from './CodeEditor.module.css';

const CodeEditor = ({ codeValue, setCodeValue, setCodeSnippetData }) => {

	const handleEditorChange = (value) => {
		setCodeValue(value);
		setCodeSnippetData(value);
	};

	const handleEditorMount = (editor, monaco) => {
		monaco.editor.defineTheme('myCustomTheme', {
			base: 'vs-dark',
			inherit: true,
			rules: [],
			colors: {
				'editor.background': '#000000',
				'editor.foreground': '#FFFFFF'
			}
		});

		monaco.editor.setTheme('myCustomTheme');
	};

	return (
		<div className={styles.mainDiv}>
			<MonacoEditor
				height="25rem"
				width={"100%"}
				language="python"
				value={codeValue}
				onChange={handleEditorChange}
				onMount={handleEditorMount}
				options={{
					selectOnLineNumbers: true
				}}
			/>
		</div>
	);
};

export default CodeEditor;