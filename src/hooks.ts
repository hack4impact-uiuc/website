import dotenv from "dotenv";
import { ContentWrapper } from "$utils/api";

dotenv.config();

const { CONTENTFUL_DELIVERY_KEY, CONTENTFUL_SPACE_ID } = process.env;

const contentWrapper = new ContentWrapper(
  CONTENTFUL_SPACE_ID!,
  CONTENTFUL_DELIVERY_KEY!
);

export { contentWrapper };
