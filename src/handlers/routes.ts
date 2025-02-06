import { Router, Request, Response } from "express";

type RouteHandler = (req: Request, res: Response) => void;
export const defineRoute = (handler: RouteHandler) => handler;

const router = Router();

// Define routes
router.get(
  "/health",
  defineRoute((req, res) => {
    res.json({ status: "OK" });
  })
);

export default router;
