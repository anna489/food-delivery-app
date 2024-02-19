import ThemeProvider from "@/theme";
import "./globals.css";
import AuthProvider from "@/context/authProvider";
import CatProvider from "@/context/catProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <CatProvider>{children}</CatProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
