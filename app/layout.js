import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href='/'>
      <h1>
        The Bubbly Baker
      </h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
    Footer
    </footer>
  )

  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
        </body>     
    </html>
  );
}
