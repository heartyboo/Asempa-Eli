import type { Metadata } from "next";
import { Segoe_UI } from "next/font/google";
import "./globals.css";

const segoeUI = Segoe_UI({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-segoe"
});

export const metadata: Metadata = {
  title: "AsemmaTech Company Limited - Electrical Engineering Excellence",
  description: "Leading the way in electrical engineering with innovative solutions for commercial, industrial, and renewable energy projects. We deliver excellence through precision, sustainability, and expert craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${segoeUI.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
