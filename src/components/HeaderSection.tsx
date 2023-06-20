import IPInfo from "./IpInfo";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useContext, useEffect } from "react";
import { IpContext } from "@/context/IpContext";
import { IpContextType } from "@/types/ipContext";

type Inputs = {
  ipInput: string;
};

const schema = yup
  .object({
    ipInput: yup
      .string()
      .trim("Cannot include leading and trailing spaces")
      .required("Please write IP or domain.")
      .strict(),
  })
  .required();

const HeaderSection = () => {
  const { IpData, updateIpData } = useContext(IpContext) as IpContextType;

  //onload, get user's IP data
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((res) => res.data)
      .then((data) => {
        if (data?.reason) {
          //alert error
          alert(data?.reason);
        } else {
          //save data
          updateIpData(data);
        }
      });
  }, []);

  //handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const { ipInput } = formData;
    const res = await axios.get(`https://ipapi.co/${ipInput}/json/`);
    const { data } = res;
    if (data?.reason) {
      //alert error
      alert(data?.reason);
    } else {
      //save data
      updateIpData(data);
    }
  };

  return (
    <div
      className="text-center grid justify-items-center grid-cols-1 
      gap-5 z-10
      bg-[url('/images/pattern-bg-desktop.png')]
      bg-cover bg-center
      relative w-full p-6  pb-[200px] min-[293px]:pb-[180px] md:pb-[95px] "
    >
      <h1 className="text-white text-3xl font-medium">IP Address Tracker</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[34.5rem]"
      >
        <div className="flex">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="py-3.5 px-6 w-full text-lg  outline-none rounded-l-xl bg-white hover:cursor-pointer"
            {...register("ipInput")}
          />
          <button
            type="submit"
            disabled={errors.ipInput?.message ? true : false}
            className="bg-gray-950 disabled:bg-gray-600 text-gray-50 font-bold px-6 rounded-r-xl"
          >{`>`}</button>
        </div>
        <p className="text-white text-sm mx-auto mt-3 w-fit bg-rose-700/30 rounded-full">
          {errors.ipInput?.message}
        </p>
      </form>

      {IpData && <IPInfo {...IpData} />}
    </div>
  );
};
export default HeaderSection;
