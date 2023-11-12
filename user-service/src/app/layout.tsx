import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/authentication/SessionProvider";
import Nav from "@/components/commons/Nav";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import getBalance from "@/lib/getBalance";
import getUsername from "@/lib/getUsername";

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

  if (!session) {
    return (
      <>
        <html suppressHydrationWarning lang="en">
          <head />
          <body className={inter.className}>
            <SessionProvider session={session}>
              <ThemeProvider attribute="class" defaultTheme="light">
                <h1>HEADER</h1>
                <Nav username={"default"} balance={0} session={session} />
                <main>{children}</main>
              </ThemeProvider>
            </SessionProvider>
          </body>
        </html>
      </>
    );
  }

  let { isHasUsername, username } = await getUsername(
    session?.user?.email || "namvuhoang235@gmail.com"
  );
  let balance = 0;

  if (isHasUsername) {
    balance = await getBalance(username);
  } else {
    balance = 0;
  }

  return (
    <>
      <html suppressHydrationWarning lang="en">
        <head />
        <body className={inter.className}>
          <SessionProvider session={session}>
            <ThemeProvider attribute="class" defaultTheme="light">
              <h1>HEADER</h1>
              <Nav username={username} balance={balance} session={session} />
              <main>{children}</main>
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  );
}
