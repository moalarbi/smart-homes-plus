import "dotenv/config";
import { app } from "./app";
import { dbHealthCheck } from "./api/db";

const PORT = process.env.PORT || 8080;

async function start() {
  try {
    await dbHealthCheck();
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`API running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start API:", error);
    process.exit(1);
  }
}

start();
