import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fazza",
  description:
    "Fazza — Full-stack developer building software and on-chain systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}