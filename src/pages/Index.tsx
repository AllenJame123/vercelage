import { Navigation } from "@/components/Navigation";
import AgeCalculator from "@/components/AgeCalculator";
import { Helmet } from "react-helmet";
import type { PageContext } from "@/types";

const Index = ({ pageContext }: { pageContext: PageContext }) => {
  const { exports: { documentProps } } = pageContext;
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b";

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{documentProps?.title || "Age Calculator"}</title>
        <meta 
          name="description" 
          content={documentProps?.description || "Free online age calculator tool"} 
        />
        <meta 
          name="keywords" 
          content="age calculator, calculate age, age in years, age in months, exact age calculator" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:title" content="Age Calculator - Calculate Your Exact Age" />
        <meta property="og:description" content="Free online age calculator tool. Calculate your exact age in years, months, days, hours, and more." />
        <meta property="og:image" content={pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={websiteUrl} />
        <meta property="twitter:title" content="Age Calculator - Calculate Your Exact Age" />
        <meta property="twitter:description" content="Free online age calculator tool. Calculate your exact age in years, months, days, hours, and more." />
        <meta property="twitter:image" content={pageImage} />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <AgeCalculator />
      </main>
    </div>
  );
};

export default Index;

// SSR document properties
export function getDocumentProps() {
  return {
    title: "Age Calculator - Calculate Your Exact Age",
    description: "Free online age calculator tool. Calculate your exact age in years, months, days, hours, and more. Perfect for finding precise age calculations for any date."
  };
}
