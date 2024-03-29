import "./globals.scss";

import { ThemeProvider } from "@/theme";
import { Header } from "@/components/Header";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/context/UserProvider";
import CatProvider from "@/context/catProvider";
import FoodProvider from "@/context/foodProvider";
import BasketProvider from "@/context/basketProvider";
import OrderProvider from "@/context/orderProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <CatProvider>
              <FoodProvider>
                <BasketProvider>
                  <OrderProvider>
                    <Header />
                    {children}
                    <Footer />
                  </OrderProvider>
                </BasketProvider>
              </FoodProvider>
            </CatProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
