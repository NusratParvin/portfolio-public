import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const exo = localFont({
  src: "./fonts/Exo2-VariableFont_wght.ttf",
  variable: "--font-exo",
  weight: "100 900",
});

const mono = localFont({
  src: "./fonts/Monoton-Regular.ttf",
  variable: "--font-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nusrat Parvin",
  description: "Nusrat-Full Stack Developer Portfolio",
  icons: {
    icon: "/assets/n.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
