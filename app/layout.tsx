import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TOKEN_ADDRESS, TOKEN_NAME } from "@/data/config";

export const metadata: Metadata = {
  title: TOKEN_NAME,
  description: `${TOKEN_NAME}  ca: ${TOKEN_ADDRESS}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body>{children}</body>
    </html>
  );
}
