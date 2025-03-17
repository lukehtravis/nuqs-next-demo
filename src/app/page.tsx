import SearchForm from "../components/search-form";
import ClientComponent from "../components/client-component";
import { SSRIndicator } from "./ssr-indicator";
import PureServerComponent from "./pure-server-component";
import PureClientComponent from "./pure-client-component";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // In Next.js 15, we need to await searchParams before using it
  const resolvedParams = await searchParams;

  // Generate a timestamp to show when server rendering occurred
  const serverTimestamp = new Date().toISOString().split("T")[1].split(".")[0];

  return (
    <main>
      <div className="explanation highlighted-box">
        <h1>NuQS v2 with Next.js 15 and React 19 Demo</h1>
        <h2>Component: Page.tsx</h2>

        <p>
          <strong>What to observe:</strong>
        </p>
        <ul>
          <li>
            <strong>Green indicators</strong> show server-rendered content
          </li>
          <li>
            <strong>Red indicators</strong> show content that was initially
            server-rendered but then hydrated on the client
          </li>
          <li>
            The "Pure Server Component" will{" "}
            <strong>always remain green</strong> because it's never hydrated
          </li>
          <li>
            Components with "use client" will flash green briefly before turning
            red during hydration
          </li>
        </ul>
        <p>
          Most importantly, even with the NuQS provider wrapping the entire
          application, components that don't need client-side interactivity
          remain as pure server components.
        </p>
      </div>

      {/* Pure server component - will never be hydrated */}
      <PureServerComponent
        timestamp={serverTimestamp}
        componentName="Pure Server Component"
      />

      <ClientComponent />

      {/* These are client components */}
      <SearchForm />

      {/* Add pure client component for comparison */}
      <PureClientComponent />
    </main>
  );
}
