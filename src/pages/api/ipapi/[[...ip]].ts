// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { ip } = req.query
    let url;
    if(ip && ip.length > 0 ){
      url = `https://ipapi.co/${ip[0]}/json/`;
    }else{
      url = 'https://ipapi.co/json/';
    }
    const ipapiRes = await axios.get(url);
    res.send(ipapiRes.data);
  } catch (err) {
    res.status(500).send({ error : 'Failed to fetch IP data' });
  }
}