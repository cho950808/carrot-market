import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(
  method: "GET" | "POST" | "DELETE",
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  // nextjs에서 실행될 function을 맞춤 설정
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
      return res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
