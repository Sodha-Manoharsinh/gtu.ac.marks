import { ReactNode, createContext, useContext, useState } from "react";

type InfoContextProps = {
  children: ReactNode;
};

type InfoContextType = {
  enroll: string;
  setEnroll: React.Dispatch<React.SetStateAction<string>>;
};

const InfoContext = createContext<InfoContextType | undefined>(undefined);

export const useInfoContext = (): InfoContextType => {
  const context = useContext(InfoContext);
  if (!context) {
    throw new Error("useHistoryContext must be used within an HistoryProvider");
  }
  return context;
};

const InfoProvider = ({ children }: InfoContextProps) => {
  const [enroll, setEnroll] = useState<string>("");
  const contextValue: InfoContextType = {
    enroll,
    setEnroll,
  };
  return (
    <InfoContext.Provider value={contextValue}>{children}</InfoContext.Provider>
  );
};

export default InfoProvider;
