// This is a pure server component that never gets hydrated on the client
export default function PureServerComponent({
  timestamp,
  componentName = "Pure Server Component",
}: {
  timestamp: string;
  componentName?: string;
}) {
  return (
    <div className="container">
      <h2>{componentName}</h2>
      <p>pure-server-component.tsx</p>
      <div className="indicator server-rendered">
        {componentName} was server-rendered at {timestamp}
      </div>
      <p>
        This component is a pure server component. It was rendered on the server
        and its HTML was sent directly to the browser. It will never be hydrated
        on the client, so this indicator will always stay green.
      </p>
    </div>
  );
}
