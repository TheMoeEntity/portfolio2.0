"use client";
import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { Helpers, portfolioData } from "..";

const getCurrData = async () => {
  const data = (await Helpers.getData2()) as portfolioData[];
  return data;
};
const ContextDefaultValues: { data: any; single: any } = {
  data: getCurrData(),
  single: {},
};

const AuthContext = React.createContext<{ data: any; single: any }>(
  ContextDefaultValues
);

export function useData() {
  return useContext(AuthContext);
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setDetails] = useState(getCurrData());
  const [single, setSingle] = useState(ContextDefaultValues.single);
  const value = {
    data,
    single,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
