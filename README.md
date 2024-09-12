  <h1>Cookie Handling on the Server</h1>

  <h2>Motivation</h2>
  <p>Experiment with setting and retrieving cookies on the server to understand how they work.</p>

  <h2>Design</h2>
  <h3>Setting a Cookie on the Server</h3>
  <p>The following example shows how to set a cookie on the server that will be sent to the client and stored in the browser's cookie storage:</p>

```ts
const name = COOKIE_NAME,
  value = COOKIE_VALUE;

// Set a cookie with a name and value. It will be accessible only via HTTP,
// meaning it won't be accessible through JavaScript (HttpOnly).

// This cookie will be sent to the server with every subsequent HTTP request
// made to the same domain that originally set the cookie.

// If the cookie with this name already exists, its value will be updated.
// Otherwise, it will be created as a new cookie.

// After COOKIE_MAX_AGE_MS milliseconds, the cookie will expire and be removed
// from the browser storage.

res.setHeader(
  "Set-Cookie",
  `${name}=${value}; Path=/; HttpOnly; Max-Age=${COOKIE_MAX_AGE_MS}`
);
```

  <h3>Behavior</h3>
  <p><strong>HttpOnly:</strong> The cookie is accessible only by the server, not by JavaScript on the client side.</p>
  <p><strong>Max-Age:</strong> Specifies how long (in milliseconds) the cookie should be valid. Once expired, the cookie will be removed.</p>

  <h3>Browser Storage Example</h3>
  <p>Once the cookie is set, it is saved in the browser's cookie storage, as shown in the example screenshot below:</p>
  
  <img src="./figs/cookies-on-browser.png" alt="Cookies in Browser" />

  <h3>Retrieving a Cookie on the Server</h3>
  <p>Cookies are sent by the client with every HTTP request. Here's how you can parse and retrieve a specific cookie on the server:</p>

```ts
const name = COOKIE_NAME;
const cookies = req.headers.cookie;

// Parse the cookies into key-value pairs
const cookieArray = cookies.split("; ").map((cookie) => cookie.split("="));
const cookieObject = Object.fromEntries(cookieArray);

// Retrieve the value of the specific cookie by its name
const cookieValue = cookieObject[name];
```

  <h3>Key Points</h3>
  <ul>
    <li>Cookies are sent by the browser with each HTTP request to the same domain.</li>
    <li>They are stored as a string in the <code>req.headers.cookie</code> field, which needs to be parsed to access individual cookie values.</li>
  </ul>
