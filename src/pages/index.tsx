import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [cookieValue, setCookieValue] = useState<string | null>(null);

  const setCookie = async () => {
    try {
      const response = await axios.get("/api/set-cookie");
      console.log(response.data.message);
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  const getCookie = async () => {
    try {
      const response = await axios.get("/api/get-cookie", );
      setCookieValue(response.data.value);
    } catch (error) {
      console.error("Error getting cookie:", error);
    }
  };

  return (
    <div>
      <h1>Cookie Management</h1>
      <button onClick={setCookie}>Set Cookie</button>
      <br />
      <button onClick={getCookie}>Get Cookie</button>
      {cookieValue && (
        <p>Cookie Value: {cookieValue}</p>
      )}
    </div>
  );
};

export default Home;
