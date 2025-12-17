import { Hono } from "hono";
import { prisma } from "./db.js";
import type { USER_RESPONSE } from "../../shared/types/user.type.js";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  cors({
    origin: "http://localhost:3001",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.get("/", async (context) => {
  const users = await prisma.user.findMany();
  return context.json({
    success: true,
    message: "Users fetched successfully",
    users,
  } satisfies USER_RESPONSE);
});

export default app;
