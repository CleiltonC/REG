import React, { createContext, useState, useContext } from "react";

const HourContext = createContext();

function initialState() {
  return [];
}

export default function HourProvider({ children }) {
  const [hourIn, setHourIn] = useState(initialState);
  const [hourOut, setHourOut] = useState(initialState);

  return (
    <HourContext.Provider
      value={{
        hourIn,
        setHourIn,
        hourOut,
        setHourOut,
      }}
    >
      {children}
    </HourContext.Provider>
  );
}

export function useHour() {
  const context = useContext(HourContext);
  if (!context) throw new Error("useHour must be used within an HourProvider!");
  const { hourIn, setHourIn, hourOut, setHourOut } = context;
  return { hourIn, setHourIn, hourOut, setHourOut };
}
