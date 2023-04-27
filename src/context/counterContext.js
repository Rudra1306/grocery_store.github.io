import React, { useContext, useState } from "react";

export const CounterContext = React.createContext({
  totalCount: 0,
  setTotalCount: () => {},
});

export function useCounterContext() {
  const { totalCount, setTotalCount } = useContext(CounterContext);

  return {
    totalCount,
    setTotalCount,
  };
}

export const CounterProvider = ({ children }) => {
  const [totalCount, setTotalCount] = useState();
  return (
    <CounterContext.Provider value={{ totalCount, setTotalCount }}>
      {children}
    </CounterContext.Provider>
  );
};
