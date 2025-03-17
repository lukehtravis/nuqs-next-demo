"use client";

import { useEffect, useState } from "react";

export function SSRIndicator({ componentName }: { componentName: string }) {
  // Initialize as "server-rendered" but will switch to "client-rendered"
  // after hydration if the component is client-rendered
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect only runs on the client, so if it runs, we know
    // this component has been hydrated on the client
    setIsClient(true);
  }, []);

  return (
    <div
      className={`indicator ${
        isClient ? "client-rendered" : "server-rendered"
      }`}
    >
      {componentName} was {isClient ? "client" : "server"}-rendered
    </div>
  );
}
