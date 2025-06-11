import Navbar from "@/components/homepage/navbar/NavBar";
import "./globals.css";
import { EB_Garamond as garamond } from "next/font/google";


const font = garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${font.className} max-w-[1440px] mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
