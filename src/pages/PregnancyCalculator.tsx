import { Navigation } from "@/components/Navigation";
import { PregnancyCalculatorComponent } from "@/components/pregnancy-calculator/PregnancyCalculatorComponent";
import { Helmet } from "react-helmet";
import type { PageContext } from "@/types";

const PregnancyCalculator = ({ pageContext }: { pageContext?: PageContext }) => {
  const { exports: { documentProps } = {} } = pageContext || {};
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Calendar with red push pins

  return (
    <div className="min-h-screen bg-soft-gray">
      <Helmet>
        <title>{documentProps?.title || "Pregnancy Age Calculator - Week by Week Progress"}</title>
        <meta 
          name="description" 
          content={documentProps?.description || "Calculate your pregnancy age and track your progress week by week with our free pregnancy calculator. Get detailed information about your baby's development."} 
        />
        <meta 
          name="keywords" 
          content={documentProps?.keywords || "pregnancy calculator, pregnancy week calculator, pregnancy age, pregnancy timeline"} 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={documentProps?.ogUrl || `${websiteUrl}/pregnancy-calculator`} />
        <meta property="og:title" content={documentProps?.ogTitle || "Pregnancy Calculator - Track Your Pregnancy Week by Week"} />
        <meta property="og:description" content={documentProps?.ogDescription || "Calculate your pregnancy age, estimated due date, and track your baby's development week by week with our free pregnancy calculator."} />
        <meta property="og:image" content={documentProps?.ogImage || pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content={documentProps?.twitterCard || "summary_large_image"} />
        <meta property="twitter:url" content={documentProps?.ogUrl || `${websiteUrl}/pregnancy-calculator`} />
        <meta property="twitter:title" content={documentProps?.twitterTitle || "Pregnancy Calculator - Track Your Pregnancy Week by Week"} />
        <meta property="twitter:description" content={documentProps?.twitterDescription || "Calculate your pregnancy age, estimated due date, and track your baby's development week by week with our free pregnancy calculator."} />
        <meta property="twitter:image" content={documentProps?.twitterImage || pageImage} />
      </Helmet>
      <Navigation />
      <div className="p-4 sm:p-6 lg:p-8 animate-fadeIn">
        <div className="max-w-4xl mx-auto space-y-8">
          <PregnancyCalculatorComponent />
        </div>
      </div>
    </div>
  );
};

export default PregnancyCalculator;

// SSR document properties
export function getDocumentProps() {
  return {
    title: "Pregnancy Age Calculator - Week by Week Progress",
    description: "Calculate your pregnancy age and track your progress week by week with our free pregnancy calculator. Get detailed information about your baby's development.",
    keywords: "pregnancy calculator, pregnancy week calculator, pregnancy age, pregnancy timeline",
    ogTitle: "Pregnancy Calculator - Track Your Pregnancy Week by Week",
    ogDescription: "Calculate your pregnancy age, estimated due date, and track your baby's development week by week with our free pregnancy calculator.",
    ogImage: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ogUrl: "https://agecalculator.app/pregnancy-calculator",
    twitterCard: "summary_large_image",
    twitterTitle: "Pregnancy Calculator - Track Your Pregnancy Week by Week",
    twitterDescription: "Calculate your pregnancy age, estimated due date, and track your baby's development week by week with our free pregnancy calculator.",
    twitterImage: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    canonicalUrl: "https://agecalculator.app/pregnancy-calculator"
  };
}
