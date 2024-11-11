"use client";

import dotenv from "dotenv";
import { useState } from "react";

dotenv.config();

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    // FIXME: Env is currently not working, temporarily hardcode the values for now
    // if (!process.env.API_BASE_URL || !process.env.API_TOKEN) {
    //   throw new Error("Missing required environment variables");
    // }

    try {
      setLoading(true);

      // Replace with your API URL and token, hardcoded
      const response = await fetch(
        `${process.env.API_BASE_URL}/api/v1/order-brands?page=1&pageSize=10&export=true`,
        {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
            Accept: "application/json",
          },
          // TODO: Add query parameters instead of hardcoding it
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the binary data
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "export.xls";
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <button
        onClick={handleDownload}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: loading ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Downloading..." : "Download Excel"}
      </button>
    </main>
  );
}
