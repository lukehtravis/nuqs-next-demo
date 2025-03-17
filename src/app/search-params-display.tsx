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
      <h2>Current URL Parameters</h2>
      <SSRIndicator componentName="SearchParamsDisplay" />

      <pre>{JSON.stringify(searchParams, null, 2)}</pre>

      <div className="explanation">
        <p>
          <strong>Note:</strong> This component receives the search parameters
          via props from the parent page component, and does not read them
          directly from the URL, proving that it's properly server-side
          rendered.
        </p>
      </div>
    </div>
  );
}
