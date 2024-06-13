import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TOKEN_ADDRESS, TOKEN_NAME } from "@/data/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://trump-wif-birthday.fun"),
  title: TOKEN_NAME,
  description: `${TOKEN_NAME}  ca: ${TOKEN_ADDRESS}`,
  applicationName: TOKEN_NAME,
  robots: "index, follow",
  openGraph: {
    title: TOKEN_NAME,
    description: `${TOKEN_NAME}  ca: ${TOKEN_ADDRESS}`,
    images: "https://trump-wif-birthday.fun/images/banner.png",
  },
  twitter: {
    title: TOKEN_NAME,
    description: `${TOKEN_NAME}  ca: ${TOKEN_ADDRESS}`,
    images: "https://trump-wif-birthday.fun/images/banner.png",
  },
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
