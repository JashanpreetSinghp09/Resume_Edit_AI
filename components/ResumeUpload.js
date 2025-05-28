import mammoth from "mammoth"; // Importing mammoth for DOCX file processing
import React from "react";
// components/ResumeUpload.js
// This component allows users to upload a DOCX file and extracts its text content
// to display it in the application.


export default function ResumeUpload({ setLines }) {
  const handleDocxUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const { value } = await mammoth.extractRawText({ arrayBuffer });
      const splitLines = value.split("\n").filter((line) => line.trim() !== "");
      setLines(splitLines);
    };
    reader.readAsArrayBuffer(file);
  };

  return <input type="file" accept=".docx" onChange={handleDocxUpload} className="mb-4" />;
}
