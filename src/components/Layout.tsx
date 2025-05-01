import clsx from "clsx";
import { ReactNode } from "react";
import { getCurrentVersion } from "../version";
import { config } from "../config";

export function Layout({ title, children, className }: { title: string, children: ReactNode, className?: string }) {
  return (
    <html className="h-full">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="My website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/main.css" />
        <script src="/htmx.js" defer></script>
        {config.hotReload &&
          <script src={`/hr.js?version=${getCurrentVersion()}`} defer></script>
        }
      </head>
      <body className="h-full">
        <div className={clsx("max-w-screen-sm mx-auto  flex flex-col gap-8", className)}>
          <div className="w-full flex justify-between max-w-screen-md mx-auto">
            <header className="flex-1 flex justify-between items-center" hx-boost="true">
              <a href="/" className="btn btn-ghost">
                Home
              </a>
              <nav>
                <a href="/about" className="btn btn-ghost">
                  About
                </a>
                <a href="/login" className="btn btn-ghost">
                  Login
                </a>
              </nav>
            </header>
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
