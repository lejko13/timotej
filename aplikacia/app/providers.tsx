"use client";

import { createContext, useContext, useState } from "react";

type AppContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  okno: boolean;
  setOkno: React.Dispatch<React.SetStateAction<boolean>>;
  otovrenie: boolean;
  setOtvorenie: React.Dispatch<React.SetStateAction<boolean>>;


};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {



  const [open, setOpen] = useState(false);

  const [okno, setOkno] = useState(false);

  const [otovrenie, setOtvorenie] = useState(false);



  return (
    <AppContext.Provider value={{ open, setOpen,okno, setOkno,otovrenie, setOtvorenie}}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
    
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}