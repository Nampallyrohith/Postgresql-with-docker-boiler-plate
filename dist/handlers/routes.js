import { Router } from "express";
export const defineRoute = (handler) => handler;
const router = Router();
// Define routes
router.get("/health", defineRoute((req, res) => {
    res.json({ status: "OK" });
}));
export default router;
