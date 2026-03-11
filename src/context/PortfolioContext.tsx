import React, { createContext, useContext, useState, useEffect } from "react";

interface PortfolioContextType {
  isMultiPage: boolean;
  setIsMultiPage: (value: boolean) => void;
  toggleMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMultiPage, setIsMultiPage] = useState(() => {
    const saved = localStorage.getItem("portfolioMode");
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("portfolioMode", JSON.stringify(isMultiPage));
  }, [isMultiPage]);

  const toggleMode = () => {
    setIsMultiPage((prev) => !prev);
  };

  return (
    <PortfolioContext.Provider value={{ isMultiPage, setIsMultiPage, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioMode = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error(
      "usePortfolioMode must be used within PortfolioProvider"
    );
  }
  return context;
};
