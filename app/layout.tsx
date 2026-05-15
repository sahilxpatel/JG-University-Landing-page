import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "JG University | Empowering Future Leaders",
  description: "Modern education powered by innovation and industry-focused learning at JG University.",
  icons: {
    icon: "https://jguni.in/images/jg-logo.svg",
    apple: "https://jguni.in/images/jg-logo.svg",
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#020617] transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
