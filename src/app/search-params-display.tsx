// This component is intentionally not using 'use client' so it will be a server component
import { SSRIndicator } from "./ssr-indicator";

// This is a server component that will read the searchParams
// through its props, not from the URL
export default function SearchParamsDisplay({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="params-container">
      <h2>Current URL Parameters (from Server)</h2>
      <SSRIndicator componentName="SearchParamsDisplay" />

      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </div>
  );
}
