"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(() => new QueryClient()); // Lazy initialization
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};