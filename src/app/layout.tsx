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
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
