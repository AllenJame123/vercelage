import { Navigation } from "@/components/Navigation";
import { GenerationFinderComponent } from "@/components/generation-finder/GenerationFinderComponent";
import { Helmet } from "react-helmet";
import type { PageContext } from "@/types";

const GenerationFinder = ({ pageContext }: { pageContext?: PageContext }) => {
  const { exports: { documentProps } = {} } = pageContext || {};
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f";

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{documentProps?.title || "What Generation Am I? - Generational Cohort Finder"}</title>
        <meta 
          name="description" 
          content={documentProps?.description || "Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation. Free online generation calculator tool."} 
        />
        <meta 
          name="keywords" 
          content={documentProps?.keywords || "generation calculator, what generation am i, generational cohort, gen z, millennial, gen x, baby boomer"} 
        />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={documentProps?.ogUrl || `${websiteUrl}/what-generation-am-i`} />
        <meta property="og:title" content={documentProps?.ogTitle || "What Generation Am I? - Generational Cohort Finder"} />
        <meta property="og:description" content={documentProps?.ogDescription || "Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation."} />
        <meta property="og:image" content={documentProps?.ogImage || pageImage} />

        <meta property="twitter:card" content={documentProps?.twitterCard || "summary_large_image"} />
        <meta property="twitter:url" content={documentProps?.ogUrl || `${websiteUrl}/what-generation-am-i`} />
        <meta property="twitter:title" content={documentProps?.twitterTitle || "What Generation Am I? - Generational Cohort Finder"} />
        <meta property="twitter:description" content={documentProps?.twitterDescription || "Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation."} />
        <meta property="twitter:image" content={documentProps?.twitterImage || pageImage} />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <GenerationFinderComponent />
      </main>
    </div>
  );
};

export default GenerationFinder;

// SSR document properties
export function getDocumentProps() {
  return {
    title: "What Generation Am I? - Generational Cohort Finder",
    description: "Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation. Free online generation calculator tool.",
    keywords: "generation calculator, what generation am i, generational cohort, gen z, millennial, gen x, baby boomer",
    ogTitle: "What Generation Am I? - Generational Cohort Finder",
    ogDescription: "Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation.",
    ogImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    ogUrl: "https://agecalculator.app/what-generation-am-i",
    twitterCard: "summary_large_image",
    twitterTitle: "What Generation Am I? - Generational Cohort Finder",
    twitterDescription: "Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation.",
    twitterImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    canonicalUrl: "https://agecalculator.app/what-generation-am-i"
  };
}
