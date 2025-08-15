import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default RootLayout;
