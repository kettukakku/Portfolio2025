import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rien K-T Portfolio",
  description: "Words have the power to move us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
