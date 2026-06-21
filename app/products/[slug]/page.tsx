import React from "react";
import { notFound } from "next/navigation";
import { conveyorData } from "@/data/conveyorData";
import ItemDetailClient from "./ItemDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all 18 items at build time
export async function generateStaticParams() {
  const allItems = conveyorData.conveyorSystemsData.flatMap((cat) =>
    cat.items.map((item) => ({
      slug: item.slug
    }))
  );
  return allItems;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Find the conveyor item and its parent category
  let foundItem = null;
  let categoryName = "";

  for (const cat of conveyorData.conveyorSystemsData) {
    const item = cat.items.find((i) => i.slug === slug);
    if (item) {
      foundItem = item;
      categoryName = cat.category;
      break;
    }
  }

  if (!foundItem) {
    notFound();
  }

  return <ItemDetailClient item={foundItem} categoryName={categoryName} />;
}
