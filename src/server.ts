import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import dotenv from "dotenv";
import * as sapper from "@sapper/server";
import { ContentWrapper } from "./utils/api";
import "regenerator-runtime/runtime.js";

dotenv.config();

const { PORT, NODE_ENV, CONTENTFUL_DELIVERY_KEY, CONTENTFUL_SPACE_ID } =
  process.env;
const dev = NODE_ENV === "development";

const contentWrapper = new ContentWrapper(
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_KEY
);

export { contentWrapper };

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
