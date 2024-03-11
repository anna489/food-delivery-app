import ThemeProvider from "@/theme";
import "./globals.css";
import AuthProvider from "@/context/authProvider";
import CatProvider from "@/context/catProvider";
import FoodProvider from "@/context/foodProvider";
import UserProvider from "@/context/userProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <UserProvider>
            <CatProvider>
              <FoodProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </FoodProvider>
            </CatProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
