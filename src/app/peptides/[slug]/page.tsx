import { notFound } from "next/navigation";
import { HomeFaq } from "@/components/home-faq";
import { ProductDetailView } from "@/components/product-detail-view";
import { getProduct, products } from "@/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = ["ghk-cu", "glutathione", "bpc-157"]
    .map((relatedSlug) => getProduct(relatedSlug))
    .filter((relatedProduct): relatedProduct is NonNullable<typeof relatedProduct> =>
      Boolean(relatedProduct),
    );

  return (
    <>
      <ProductDetailView product={product} relatedProducts={relatedProducts} />
      <HomeFaq />
    </>
  );
}
