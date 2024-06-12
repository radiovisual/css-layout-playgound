import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import styles from "./page.module.css";

import { Header } from "./components/header";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS Layout Playground",
  description: "Experiment with common layout settings in CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles["page-container"]}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
