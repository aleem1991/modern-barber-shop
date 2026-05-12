// app/branches/[slug]/page.tsx
import BranchClient from "./BranchClient";

// This runs on the server during build time to generate the 3 branches
export function generateStaticParams() {
  return [
    { slug: "downtown-core" },
    { slug: "koramangala-hub" },
    { slug: "indiranagar-elite" }
  ];
}

export default async function BranchDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <BranchClient slug={resolvedParams.slug} />;
}