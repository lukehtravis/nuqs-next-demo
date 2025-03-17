# NuQS v2 with Next.js 15 and React 19 Demo

This demo project proves that NuQS v2 is compatible with Next.js 15 and React 19, specifically demonstrating that server-side rendering works correctly when using the NuQS adapter.

## What This Demo Shows

The demo illustrates that:

1. Components wrapped with the NuQS provider can still be server-side rendered
2. Only components explicitly marked with `'use client'` are client-rendered
3. URL parameters can be accessed and manipulated without breaking server-side rendering

## How to Use This Demo

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd nuqs-nextjs15-demo

# Install dependencies
npm install
```

### Running the Demo

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing Server-Side Rendering

1. **Visual Indicators**: Components have visual indicators showing whether they are server-rendered (green) or client-rendered (red).

2. **URL Parameter Updates**: Try changing the parameters using the form. Notice that:

   - The server components remain server-rendered (green)
   - Only client components are client-rendered (red)
   - URL parameters are correctly updated and accessible in both server and client components

3. **Direct URL Manipulation**: Try adding parameters directly in the URL (e.g., `?q=test&category=books`). Refresh the page and notice that all server components are initially rendered on the server with the correct parameters.

## Key Files and Components

- `src/app/nuqs-provider.tsx`: The NuQS adapter for Next.js
- `src/app/layout.tsx`: Root layout with the NuQS provider
- `src/app/page.tsx`: Main page component (server component)
- `src/app/search-params-display.tsx`: Server component displaying URL parameters
- `src/components/search-form.tsx`: Client component for updating URL parameters
- `src/components/client-component.tsx`: Client component accessing URL parameters

## Technical Details

This demo uses:

- Next.js 15 with the App Router
- React 19
- NuQS v2
- TypeScript

The NuQS provider is correctly set up in the root layout with the `NextQueryParamsProvider`, demonstrating that this configuration preserves server-side rendering while allowing URL parameter management.
