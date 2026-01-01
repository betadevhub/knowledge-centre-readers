import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import ToastContainer from "./components/Toast/ToastContainer";
import SidePane from "./components/SidePane/SidePane";
import MainWrapper from "./wrapper/MainWrapper";



export const metadata: Metadata = {
  title: "Ticket Lush Knowledge Centre",
  description: "Everything you need to master TicketLush.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Header />
        <MainWrapper>
          <SidePane />
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}
