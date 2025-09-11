import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  ChakraProvider,
  ColorModeScript,
  Center,
  Spinner,
  PortalManager,
} from "@chakra-ui/react";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./services/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      gcTime: 10 * 60_000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <PortalManager zIndex={1500}>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <Center minH="100vh">
                <Spinner size="xl" />
              </Center>
            }
          >
            <RouterProvider router={router} />
          </Suspense>
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </PortalManager>
    </ChakraProvider>
  </StrictMode>
);
