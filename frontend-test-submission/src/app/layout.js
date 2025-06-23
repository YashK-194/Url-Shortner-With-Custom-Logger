"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UrlProvider } from "../context/UrlContext";
import Navigation from "../components/Navigation";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { logger, LOG_CATEGORIES } from "../utils/logger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "URL Shortener",
  description: "A simple URL shortener application",
};

export default function RootLayout({ children }) {
  // Initialize logging when the app starts
  useEffect(() => {
    logger.info("page", "Application initialized", {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
    });

    // Log when the component unmounts (app closes)
    return () => {
      logger.info("page", "Application terminated", {
        timestamp: new Date().toISOString(),
      });
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UrlProvider>
          <Navigation />
          <Container sx={{ pt: 4, pb: 8 }}>{children}</Container>
        </UrlProvider>
      </body>
    </html>
  );
}
