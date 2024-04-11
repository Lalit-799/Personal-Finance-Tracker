 "use client";

import "./globals.css";
import Head from "./head";
import Nav from "@/components/Navigation";

import FinanceContextProvider from "@/lib/store/finance-context";
import AuthContextProvider from "@/lib/store/auth-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <Head/>
      <body>
        <AuthContextProvider>
          <FinanceContextProvider>
            <Nav />
            {children}
          </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}