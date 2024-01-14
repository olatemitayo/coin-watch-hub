import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Poppins, Pacifico } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['400', '500']
});

const pacifico = Pacifico({
  subsets: ['latin'], 
  variable: '--font-pacifico',
  weight: '400'
})

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <main className={`${poppins.variable}  font-poppins `}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider withNormalizeCSS withGlobalStyles >
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </main>
  );
}
