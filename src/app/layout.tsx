import "./globals.css";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#03193A",}}>
        {children}
      </body>
    </html>
  );
}
