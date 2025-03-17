import SearchParamsDisplay from "./search-params-display";
import SearchForm from "../components/search-form";
import ClientComponent from "../components/client-component";
import { SSRIndicator } from "./ssr-indicator";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // In Next.js 15, we need to await searchParams before using it
  const resolvedParams = await searchParams;

  return (
    <main>
      <h1>NuQS v2 with Next.js 15 and React 19 Demo</h1>

      <div className="explanation">
        <p>
          This demo proves that wrapping your app in the NuQS adapter does not
          prevent server-side rendering. The green indicators show components
          rendered on the server, while the red indicators show client-rendered
          components.
        </p>
        <p>
          Try updating the URL parameters using the form below and observe that
          the SearchParamsDisplay component remains server-rendered, while only
          the components explicitly marked with 'use client' are
          client-rendered.
        </p>
      </div>

      <div className="container">
        <h2>Page Component</h2>
        <SSRIndicator componentName="Home Page" />

        <p>
          This is the main page component. It receives the searchParams object
          from Next.js and passes it down to child components.
        </p>
      </div>

      <SearchParamsDisplay searchParams={resolvedParams} />
      <SearchForm />
      <ClientComponent />
    </main>
  );
}
