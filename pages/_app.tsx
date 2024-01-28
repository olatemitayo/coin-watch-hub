import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme } from "next-themes";
import type { AppProps } from "next/app";
import { Poppins, Pacifico } from "@next/font/google";

import { CryptoProvider } from "@/providers";

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
  const { resolvedTheme } = useTheme();
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
      <CryptoProvider>
      <ThemeProvider
          attribute="class"
          enableSystem={false}
          forcedTheme={resolvedTheme || undefined}
          enableColorScheme
        >
        <MantineProvider withNormalizeCSS withGlobalStyles >
          <Component {...pageProps} />
        </MantineProvider>
        </ThemeProvider>
      </CryptoProvider>
      </QueryClientProvider>

    </main>
  );
}
