"use client";

import { useQueryState } from "nuqs";
import { SSRIndicator } from "../app/ssr-indicator";

export default function ClientComponent() {
  // We're accessing the query parameters directly in this client component
  const [searchQuery] = useQueryState("q");
  const [category] = useQueryState("category");
  const [sort] = useQueryState("sort");

  return (
    <div className="container">
      <h2>Client-Side Parameter Access</h2>
      <SSRIndicator componentName="ClientComponent" />

      <div>
        <p>
          <strong>Query:</strong> {searchQuery || "N/A"}
        </p>
        <p>
          <strong>Category:</strong> {category || "all"}
        </p>
        <p>
          <strong>Sort:</strong> {sort || "asc"}
        </p>
      </div>

      <div className="explanation">
        <p>
          <strong>Note:</strong> This component is explicitly marked with 'use
          client' and accesses the URL parameters directly using nuqs hooks. It
          will always show as client-rendered, but importantly, this doesn't
          affect the server rendering of other components.
        </p>
      </div>
    </div>
  );
}
