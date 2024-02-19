import "./globals.scss";

import { ThemeProvider } from "@/theme";
import { Header } from "@/components/Header";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/context/UserProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeProvider>
            <UserProvider>
              <Header />
              {children}
              <Footer />
            </UserProvider>
          </ThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
