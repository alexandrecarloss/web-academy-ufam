import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"

import type { Metadata } from "next";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar/Navbar";
import FavoritesProvider from "./contexts/FavoritesContext/FavoritesProvider";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import ReactQueryProvider from "./contexts/ReactQueryProvider/ReactQueryProvider";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "WA Loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ReactQueryProvider>
          <AuthProvider>
            <FavoritesProvider>
              <Navbar />
              {children}
              <ToastContainer />
              <BootstrapClient />
            </FavoritesProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
