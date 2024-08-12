import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        <div className="flex flex-col h-screen">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
