import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NuQS v2 with Next.js 15 Demo",
  description: "Testing SSR compatibility with NuQS v2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // This script runs before React hydration
              console.log("Page loaded from server at: " + new Date().toISOString());
              window.SERVER_RENDER_COMPLETE = true;
            `,
          }}
        />
      </head>
      <body>
        <div className="header-note">
          <strong>NuQS v2 with Next.js 15 and React 19 Demo</strong> | Testing
          Server-Side Rendering Compatibility
        </div>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
