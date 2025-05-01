import { renderToReadableStream } from "react-dom/server";
import { JSX } from "react";

export async function render(Component: () => JSX.Element, status = 200): Promise<Response> {
  console.time( Component.name)
  const content = await renderToReadableStream(<Component />)
  console.timeEnd(Component.name)

  return new Response(content, {
    status,
    headers: { "Content-Type": "text/html" },
  });
}
