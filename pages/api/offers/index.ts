import { NextApiResponse, NextApiRequest } from 'next'


export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await fetch('https://justjoin.it/api/offers').then((res) => res.json()).then((data) => data[0]);
  return res.status(200).json({data:data})
}
