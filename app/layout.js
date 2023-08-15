import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";

export const metadata = {
  title: "Personal Dashboard",
  description:
    "a personal project for practice React,Tailwind,Next13,Git,JSON server,axios and many more also to organize my personal life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full">
        <div className="flex w-full">
          <SidePanel />
          <div className="flex flex-col w-full">
            <Header />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
