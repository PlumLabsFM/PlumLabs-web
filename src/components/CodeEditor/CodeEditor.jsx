import MonacoEditor from '@monaco-editor/react';
import React, { useEffect } from 'react';
import styles from './CodeEditor.module.css';

const CodeEditor = ({codeValue, setCodeValue}) => {

	useEffect(() => {
		// Fetch the Python file from the public directory
		fetch("./sample.py")
			.then((response) => response.text())
			.then((data) => {
				setCodeValue(data);
			})
			.catch((err) => console.error("Error loading file:", err));
	}, []);

	const handleEditorChange = (value) => {
		setCodeValue(value);
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
				height="15rem"
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