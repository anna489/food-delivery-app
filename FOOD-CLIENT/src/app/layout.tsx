import "./globals.css";

import { ThemeProvider } from "@/theme";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          height: "auto",
          maxWidth: "full",
        }}
      >
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
