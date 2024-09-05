<h2>Motivation</h2>
Experiment with set \ get cookie on the server

<h2>Design</h2>
<h3>Set on the server</h3>

```ts
  const name = COOKIE_NAME, value = COOKIE_VALUE;
    // --- Sets a cookie with a name and value, valid for the entire domain, and accessible only via HTTP.
    // --- The cookie will be sent to the server with every subsequent HTTP request made to the same domain that set the cookie
  res.setHeader("Set-Cookie", `${name}=${value}; Path=/; HttpOnly`);
```

<h3>Get on the server</h3>

```ts
  const name = COOKIE_NAME
  const cookies = req.headers.cookie;
  // Parse the cookies
  const cookieArray = cookies.split("; ").map(cookie => cookie.split("="));
  const cookieObject = Object.fromEntries(cookieArray);
  // Retrieve the specific cookie value
  const cookieValue = cookieObject[name];
```

<h2>Storage</h2>
The cookie is save on the browser

<img src='./figs/cookies-on-browser.png/>