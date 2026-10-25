import React, { useState, useEffect } from "react";
import { useTheme } from "../App";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import axios from "axios";

const Resume = () => {
  const { darkMode } = useTheme();
  const [pdfFile, setPdfFile] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const googleDriveLink =
          "https://drive.google.com/file/d/13hzvNthfQxUP3kwtGURp9xxhNQ3eMGT1/view?usp=sharing";
        const fileIdMatch = googleDriveLink.match(/\/d\/(.*?)\//);
        if (!fileIdMatch) {
          throw new Error("Invalid Google Drive link format.");
        }
        const fileId = fileIdMatch[1];
        console.log(fileId);
        // Construct the direct download URL
        const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        // Fetch the PDF
        const response = await axios.get(directDownloadUrl, {
          responseType: "blob",
        });
        const file = new Blob([response.data], { type: "application/pdf" });
        setPdfFile(URL.createObjectURL(file));
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };
    fetchPDF();
  }, []);

  return (
    <div className={`p-4 min-h-screen bg-background font-body`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-heading mb-6 text-primary">My Resume</h2>
        {pdfFile ? (
          <div className="bg-surface rounded-lg shadow-lg overflow-hidden">
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 bg-surface rounded-lg shadow-lg">
            <div className="text-muted font-body-light">Loading PDF...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
