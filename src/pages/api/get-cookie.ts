import { COOKIE_NAME } from "@/logic/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const name = COOKIE_NAME
    
  // Get the cookie from the request headers
  const cookies = req.headers.cookie;
  if (!cookies) {
    res.status(404).json({ message: "No cookies found" });
    return;
  }

  // Parse the cookies
  const cookieArray = cookies.split("; ").map(cookie => cookie.split("="));
  const cookieObject = Object.fromEntries(cookieArray);

  // Retrieve the specific cookie value
  const cookieValue = cookieObject[name];

  if (!cookieValue) {
    res.status(404).json({ message: "Cookie not found" });
    return;
  }

  res.status(200).json({ message: "Cookie retrieved", value: cookieValue });
}
