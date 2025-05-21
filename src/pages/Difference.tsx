import { Navigation } from "@/components/Navigation";
import { AgeDifferenceCalculator } from "@/components/age-difference/AgeDifferenceCalculator";
import { Helmet } from "react-helmet";
import type { PageContext } from "@/types";

const Difference = ({ pageContext }: { pageContext?: PageContext }) => {
  const { exports: { documentProps } = {} } = pageContext || {};
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1517842645767-c639042777db"; // Pencil on notebook

  return (
    <>
      <Helmet>
        <title>{documentProps?.title || "Age Difference Calculator - Calculate Age Gaps with Precision"}</title>
        <meta 
          name="description" 
          content={documentProps?.description || "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates with our precise age difference calculator."} 
        />
        <meta 
          name="keywords" 
          content="age difference calculator, calculate age gap, age gap calculator, date difference calculator" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${websiteUrl}/difference`} />
        <meta property="og:title" content={documentProps?.ogTitle || "Age Difference Calculator - Calculate Age Gaps with Precision"} />
        <meta property="og:description" content={documentProps?.ogDescription || "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates."} />
        <meta property="og:image" content={documentProps?.ogImage || pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${websiteUrl}/difference`} />
        <meta property="twitter:title" content={documentProps?.twitterTitle || "Age Difference Calculator - Calculate Age Gaps with Precision"} />
        <meta property="twitter:description" content={documentProps?.twitterDescription || "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates."} />
        <meta property="twitter:image" content={documentProps?.twitterImage || pageImage} />
      </Helmet>
      <Navigation />
      <AgeDifferenceCalculator />
    </>
  );
};

export default Difference;

// SSR document properties
export function getDocumentProps() {
  return {
    title: "Age Difference Calculator - Calculate Age Gaps with Precision",
    description: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates with our precise age difference calculator.",
    keywords: "age difference calculator, calculate age gap, age gap calculator, date difference calculator",
    ogTitle: "Age Difference Calculator - Calculate Age Gaps with Precision",
    ogDescription: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates.",
    ogImage: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    ogUrl: "https://agecalculator.app/difference",
    twitterCard: "summary_large_image",
    twitterTitle: "Age Difference Calculator - Calculate Age Gaps with Precision",
    twitterDescription: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates.",
    twitterImage: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    canonicalUrl: "https://agecalculator.app/difference"
  };
}
