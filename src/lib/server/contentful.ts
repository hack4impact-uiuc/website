import {
  CONTENTFUL_DELIVERY_KEY,
  CONTENTFUL_SPACE_ID,
} from "$env/static/private";
import { ContentWrapper } from "$lib/utils/api";

export const contentWrapper = new ContentWrapper(
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_KEY
);
