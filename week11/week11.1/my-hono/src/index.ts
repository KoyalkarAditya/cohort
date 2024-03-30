import { Hono } from "hono";

const app = new Hono();

//syntax

async function authenticationMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    await next(); //await is optional and used to peform next() after that below code runs after await
  } else {
    return c.text("You don't have access");
  }
}
app.get("/", authenticationMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello Hono!");
});

export default app;
