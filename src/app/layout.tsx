import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAUSLER – Tu caja de seguridad privada",
  description: "HAUSLER – Tu caja de seguridad privada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./hausler-ico.webp" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
