import { IpDataType } from "@/types/ipContext";
import infoStyles from "./ipInfo.module.scss";
const IPInfo = ({ ip, city, region, utc_offset, org }: IpDataType) => {
  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-4 gap-y-6 bg-gray-100 rounded-xl py-8 px-2 shadow-xl
          absolute bottom-0 translate-y-1/2 ${infoStyles.wFullMargin} max-w-[68rem] z-50
    `}
    >
      <div className={`${infoStyles.infoSection} ${infoStyles.divider}`}>
        <p>IP Address</p>
        <h2>{ip}</h2>
      </div>
      <div className={`${infoStyles.infoSection} ${infoStyles.divider}`}>
        <p>Location</p>
        <h2>
          {city}, {region}
        </h2>
      </div>
      <div className={`${infoStyles.infoSection} ${infoStyles.divider}`}>
        <p>Timezone</p>
        <h2>UTC {utc_offset}</h2>
      </div>
      <div className={`${infoStyles.infoSection}`}>
        <p>ISP</p>
        <h2>{org}</h2>
      </div>
    </div>
  );
};
export default IPInfo;
