import type { Response, Request } from "express";
import { contentWrapper } from "../server";

export async function get(_: Request, res: Response): Promise<void> {
  const [info] = await contentWrapper.get("uiucInfo");

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(info));
}
