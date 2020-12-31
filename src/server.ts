import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import dotenv from "dotenv";
import * as sapper from "@sapper/server";

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

const {
  PORT,
  NODE_ENV,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_KEY,
} = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware({
      session: () => ({
        SPACE: CONTENTFUL_SPACE_ID,
        TOKEN: CONTENTFUL_DELIVERY_KEY,
      }),
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
