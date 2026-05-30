import { ExploreStudies } from "@/components/explore-studies";
import { FeaturedCompounds } from "@/components/featured-compounds";
import { HomeFaq } from "@/components/home-faq";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedCompounds />
      <HomeFaq />
      <ExploreStudies />
    </>
  );
}
