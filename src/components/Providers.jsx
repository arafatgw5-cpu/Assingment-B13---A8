"use client";

import { Toaster } from "sonner";

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <Toaster position="top-center" richColors />
    </>
  );
};

export default Providers;