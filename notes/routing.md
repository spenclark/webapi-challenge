# Routing Notes

> We write code for humans, optimize for readability  
> &mdash; <cite>A developer I'd like to have on my team</cite>

## Terminology

Separation of Concerns answers the question: _"who should be doing this?"_

## Routing

- use it to break up an application/api into sub applications
- picking the code to execute based on URL and HTTP Method
- used for managing sub resources (the comments on a blog post)

To fix `listen EADDRINUSE: address already in use :::4000` run the api on another port or stop any other server running on that port. Use `ctrl + c` to stop a running server on a terminal.

Error `server.listen is not a function`, check that the server is exported correctly (mind the `s` in `exports`), also check that the import (`require`) for the server is correct.

_as sort of a sanity test, would it be safe to say because of server.use("/api/hubs", hubsRouter); inside our server.js, all of our routes inside hubs-router.js will have "/api/hubs" in front of it, almost like how we set our baseURL in axiosWithAuth, yes?_ yes!

TypeError: Cannot read property 'use' of undefined. Make sure that whatever is left of `.use` is defined.

Error: SQLITE_CONSTRAINT: UNIQUE constraint failed: hubs.name] errno: 19, code: 'SQLITE_CONSTRAINT'. This means we're trying to create a new hub with a name of an existing hub. Pick a new name.

# Query String Parameters

The client can send data to the server inside:

- body
- URL parameters
- query string parameters (part of the URL)
- ? (headers)

https://www.google.com
/search ------> path (routing handles that)
? ------------> marks the beginning of the query string parameters
source=hp --> key/value
& ------------> separates key/values
ei=3a7mXbHqJczm-gSzn6jIBw

Tranlates to an object (Express does it)

```js
const req.query = {
  source: 'hp',
  ei: 'asdfasdfasdfasdfasdfasfasdfasd'
}
```
