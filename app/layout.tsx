import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Providers } from "~/components/Atoms/EmotionProvider";
import { StoreProvider } from "~/store/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Beanskart",
  description: "Bringing coffee closure to you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <StoreProvider>{children}</StoreProvider>
        </Providers>
      </body>
    </html>
  );
}
