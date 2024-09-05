import { COOKIE_NAME, COOKIE_VALUE } from "@/logic/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = COOKIE_NAME, value = COOKIE_VALUE;
  // --- Sets a cookie with a name and value, valid for the entire domain, and accessible only via HTTP.
  // --- The cookie will be sent to the server with every subsequent HTTP request made to the same domain that set the cookie
  res.setHeader("Set-Cookie", `${name}=${value}; Path=/; HttpOnly`);
  res.status(200).json({ message: "Cookie set" });
}
