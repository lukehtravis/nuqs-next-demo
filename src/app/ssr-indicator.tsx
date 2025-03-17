"use client";

import { useEffect, useState } from "react";

export function SSRIndicator({ componentName }: { componentName: string }) {
  // Use a ref to track if we're in the browser
  const [isClient, setIsClient] = useState(false);
  const [hydrationTime, setHydrationTime] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs after hydration on the client only
    const now = new Date();
    setHydrationTime(now.toISOString().split("T")[1].split(".")[0]);
    setIsClient(true);
  }, []);

  // Only show the hydrated state if we're on the client
  return (
    <div>
      <div
        className={`indicator ${
          !isClient ? "server-rendered" : "client-rendered"
        }`}
      >
        {componentName}{" "}
        {!isClient
          ? "was initially server-rendered"
          : `was server-rendered then hydrated on client at ${hydrationTime}`}
      </div>
      <p className="render-explanation">
        {!isClient
          ? "If you see this text with a green background, you're seeing the server-rendered HTML before React hydration."
          : "The red background indicates that React has hydrated this component on the client, but the initial HTML came from the server."}
      </p>
    </div>
  );
}
