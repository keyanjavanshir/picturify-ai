import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Using IPM_Plex font
// Set up meta data
const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex' 
});

export const metadata: Metadata = {
  title: "Picturify - Production",
  description: "A Picture Enhancement Solution Using Artificial Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       {/* Import cn fron shadcn. Use IPMPlex font. */}
      <body className={cn("font-IPMPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}
