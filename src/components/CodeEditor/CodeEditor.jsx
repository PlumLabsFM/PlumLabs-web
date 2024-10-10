import MonacoEditor from "@monaco-editor/react";
import React, { useEffect, useState } from 'react';

const CodeEditor = () => {
	const [codeValue, setCodeValue] = useState(`# Python Code\nprint("Hello, World!")`);

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

	const saveToFile = () => {
		const blob = new Blob([codeValue], { type: "text/plain" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "code.py";
		link.click();
	};

	return (
		<div>
			<h1>Code Editor</h1>
			<MonacoEditor
				height="15rem"
				width={"40rem"}
				language="python"
				value={codeValue}
				onChange={handleEditorChange}
				options={{
					selectOnLineNumbers: true
				}}
			/>
			<button onClick={saveToFile} style={{ marginTop: "10px" }}>Save to File</button>
		</div>
	);
};

export default CodeEditor;