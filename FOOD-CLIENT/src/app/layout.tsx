import "./globals.scss";

import { ThemeProvider } from "@/theme";
import Nav from "@/components/Header";
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
