import express from "express";
import { connectAndQuery } from "./services/db/client.js";
import env from "./config.js";
import cors from "cors";
import routes from "./handlers/routes.js";

const app = express();

const PORT = env.PORT;
const corsOptions: cors.CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    const allowedOrigins = env.CORS_ALLOWED_ORIGIN.split(",");

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// Use the imported routes
app.use("/api", routes);

// Start the server after initializing tables
(async () => {
  try {
    await connectAndQuery();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to initialize tables or start the server:", error);
    process.exit(1);
  }
})();
