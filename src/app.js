// src/App.js
import { useState } from "react";
import ResumeUpload from "./components/ResumeUpload";
import PromptBox from "./components/PromptBox";
import LineEditor from "./components/LineEditor";
import DownloadButton from "./components/DownloadButton";

export default function App() {
  const [lines, setLines] = useState([]);
  const [prompt, setPrompt] = useState("");

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Resume Line Rewriter</h1>
      <ResumeUpload setLines={setLines} />
      <PromptBox prompt={prompt} setPrompt={setPrompt} />
      <LineEditor lines={lines} setLines={setLines} prompt={prompt} />
      <DownloadButton lines={lines} />
    </div>
  );
}
