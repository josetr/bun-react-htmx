import { render } from "./render";
import { NotFoundPage } from "./pages/not-found";
import { config } from "./config";

export function start() {
  const server = Bun.serve({
    port: process.env.PORT,
    hostname: process.env.HOSTNAME,
    development: config.development,
    async fetch(req, server) {
      if (config.hotReload && server.upgrade(req))
        return;

      const url = new URL(req.url);

      const Component = config.routes[url.pathname as keyof typeof config.routes]
      if (Component)
        return await render(Component);

      const file = Bun.file(`${config.public}${url.pathname}`);

      if (file.size === 0)
        return await render(NotFoundPage, 404);

      return new Response(file);
    },
    websocket: {
      open(ws) {
        ws.subscribe("reload");
      },
      message(ws,) {
      },
      close(ws) {
        ws.unsubscribe("reload");
      },
    }
  });

  console.log(`Listening on http://${server.hostname}:${server.port}`);
  return server;
}
