import statsCard from "./api/index.js";
import repoCard from "./api/pin.js";
import langCard from "./api/top-langs.js";
import wakatimeCard from "./api/wakatime.js";
import gistCard from "./api/gist.js";

import express from "express";
import { httpServerHandler } from "cloudflare:node";

// dotenv is for local Node servers; Workers uses Wrangler "vars" instead.
// Remove this unless you REALLY need it locally.
// import "dotenv/config";

const app = express();
const router = express.Router();

router.get("/", statsCard);
router.get("/pin", repoCard);
router.get("/top-langs", langCard);
router.get("/wakatime", wakatimeCard);
router.get("/gist", gistCard);

app.use("/api", router);

// Cloudflare's Node HTTP bridge expects you to "listen" on a port
// and then export the handler for that port.
const port = 3000;
app.listen(port);

// ✅ This default export is what makes it a Module Worker (fixes your earlier “Service Worker format” error)
export default httpServerHandler({ port });
