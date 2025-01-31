import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: {
    template: '',
    default: 'Capace Media Blog',
  },
  generator: 'Next.js',
  applicationName: 'adamsapp',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Capace Blog' }, { name: 'Capace Media Group', url: 'https://capace.se/' }],
  publisher: 'Capace Media Group',
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/shortcut-icon.png',
    apple: '/favicon/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
        {/* Header with Navigation */}
        <header className="bg-gray-800 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Providers>{children}</Providers>

        {/* Footer */}
        <footer className="text-black p-4 h-20 flex ">
          <p className="grow text-center">@capacemediagroup</p>
        </footer>
      </body>
    </html>
  );
}
