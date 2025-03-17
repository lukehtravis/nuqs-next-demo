"use client";

import { useEffect, useState } from "react";

export default function PureClientComponent() {
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => {
    // Set timestamp only after component is mounted on client
    setTimestamp(new Date().toISOString().split("T")[1].split(".")[0]);
  }, []);

  return (
    <div className="container">
      <h2>Pure Client Component</h2>
      <div className="indicator client-rendered">
        This component was rendered entirely on the client
        {timestamp ? ` at ${timestamp}` : ""}
      </div>
      <p>
        This component is a pure client component, which means it wasn't
        pre-rendered on the server at all. Note that the timestamp shown is when
        it was rendered in your browser, not on the server.
      </p>
    </div>
  );
}
