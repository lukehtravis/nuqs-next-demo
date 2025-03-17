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
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
