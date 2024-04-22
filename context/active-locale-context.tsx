"use client";

import type { LocaleName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveLocaleContextProviderProps = {
  children: React.ReactNode;
};

type ActiveLocaleContextType = {
  activeLocale: LocaleName;
  setActiveLocale: React.Dispatch<React.SetStateAction<LocaleName>>;
  // timeOfLastClick: number;
  // setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveLocaleContext =
  createContext<ActiveLocaleContextType | null>(null);

export default function ActiveLocaleContextProvider({
  children,
}: ActiveLocaleContextProviderProps) {
  const [activeLocale, setActiveLocale] = useState<LocaleName>("en");
  // const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveLocaleContext.Provider
      value={{
        activeLocale,
        setActiveLocale,
        // timeOfLastClick,
        // setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveLocaleContext.Provider>
  );
}

export function useActiveLocaleContext() {
  const context = useContext(ActiveLocaleContext);

  if (context === null) {
    throw new Error(
      "useActiveLocaleContext must be used within an ActiveLocaleContextProvider"
    );
  }

  return context;
}
