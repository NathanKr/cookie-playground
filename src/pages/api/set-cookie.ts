import {
  COOKIE_MAX_AGE_MS,
  COOKIE_NAME,
  COOKIE_VALUE,
} from "@/logic/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const name = COOKIE_NAME;
    const value = COOKIE_VALUE;

    // Sets a cookie with a name and value, valid for the entire domain,
    // and accessible only via HTTP.

    // The cookie will be sent to the server with every subsequent HTTP request
    // made to the same domain that set the cookie.

    // If the cookie name exists, its value will be overridden (i.e., updated); otherwise,
    // it will be added to the rest of the cookies (i.e., created).

    // After COOKIE_MAX_AGE_MS milliseconds, the cookie will not be sent from the client,
    // and later the browser will remove it.
    res.setHeader(
      "Set-Cookie",
      `${name}=${value}; Path=/; HttpOnly; Max-Age=${COOKIE_MAX_AGE_MS}`
    );
    res.status(200).json({ message: "Cookie set" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
