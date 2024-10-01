import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Pretendard = localFont({
  src: "/fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jiyun's portfolio",
  description: "Jiyun's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Pretendard.className}> {children} </body>
    </html>
  );
}
