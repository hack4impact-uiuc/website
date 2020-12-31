import genRequest from "../utils/content";

export async function get(req, res, next) {
  const projects = await genRequest(`
			{
				uiucProjectCollection {
					items {
						name
					}
				}
			}`);

  // const content = await projects.json().data;

  if (projects) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(projects.uiucProjectCollection.items));
  } else {
    res.writeHead(400);
    res.end();
  }
}
