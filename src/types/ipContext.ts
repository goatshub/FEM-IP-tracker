export type IpDataType = {
  message?: string;
  lat: number;
  lon: number;
  isp: string;
  timezone: string;
  city: string;
  regionName: string;
  query: string;
  [key: string]: any;
};

export type IpContextType = {
  IpData: IpDataType | undefined;
  updateIpData: (data: IpDataType) => void;
};
