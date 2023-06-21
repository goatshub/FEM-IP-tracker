export type IpDataType = {
  reason?: string;
  latitude: number;
  longitude: number;
  org: string;
  utc_offset: string;
  city: string;
  region: string;
  ip: string;
  [key: string]: any;
};

export type IpContextType = {
  IpData: IpDataType | undefined;
  updateIpData: (data: IpDataType) => void;
};
