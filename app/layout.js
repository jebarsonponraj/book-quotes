import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Quotes",
  description: "Create your own book quotes with a minimal effort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F7FAFC] sm:h-screen sm:overflow-hidden`}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
        </body>
    </html>
  );
}
