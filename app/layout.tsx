import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./markdown.css";
import SessionProviderWrapper from "@/app/components/SessionProviderWrapper"; // Adjust the path if necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evidence Action Chatbot",
  description: "Evidence Action IT Department",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
