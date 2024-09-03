import React, { useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../app/globals.css";
import Headers from "@/components/header"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const isLoginPage = router.pathname === "/login";

  return (
    
      <>
      <Headers />
      <Component {...pageProps} />
      </>
  );
};

export default MyApp;