import { createContext, ReactNode, useState } from "react";
import { IpDataType, IpContextType } from "@/types/ipContext";

export const IpContext = createContext<IpContextType | null>(null);

const IpProvider = ({ children }: { children: ReactNode }) => {
  const [IpData, setIpData] = useState<IpDataType>();
  const updateIpData = (data: IpDataType) => {
    setIpData(data);
  };

  return (
    <IpContext.Provider value={{ IpData, updateIpData }}>
      {children}
    </IpContext.Provider>
  );
};

export default IpProvider;
