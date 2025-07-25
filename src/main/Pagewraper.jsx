// src/components/PageWrapper.jsx
import React from "react";

const PageWrapper = ({ children }) => {
  return <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
};

export default PageWrapper;
