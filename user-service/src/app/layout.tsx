import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/authentication/SessionProvider";
import Nav from "@/components/commons/Nav";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tipme",
  description: "Donate for me now!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <html suppressHydrationWarning lang="en">
        <head />
        <body className={inter.className}>
          <SessionProvider session={session}>
            <ThemeProvider attribute="class" defaultTheme="light">
              <Nav balance={100_000} session={session} />
              <main>{children}</main>
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  );
}
