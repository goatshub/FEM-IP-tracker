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
// export type IpDataType = {
//   message?: string;
//   lat: number;
//   lon: number;
//   isp: string;
//   timezone: string;
//   city: string;
//   regionName: string;
//   query: string;
//   [key: string]: any;
// };

export type IpContextType = {
  IpData: IpDataType | undefined;
  updateIpData: (data: IpDataType) => void;
};
