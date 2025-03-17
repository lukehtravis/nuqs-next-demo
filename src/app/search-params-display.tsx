// This component is intentionally not using 'use client' so it will be a server component
import { SSRIndicator } from "./ssr-indicator";

// Update to handle Promise-based searchParams in Next.js 15
export default async function SearchParamsDisplay({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await the searchParams promise
  const resolvedParams = await searchParams;

  return (
    <div className="params-container">
      <h2>Current URL Parameters (from Server)</h2>
      <SSRIndicator componentName="SearchParamsDisplay" />

      <pre>{JSON.stringify(resolvedParams, null, 2)}</pre>
    </div>
  );
}
