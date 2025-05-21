import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { LeapYearCalculatorComponent } from "@/components/leap-year/LeapYearCalculatorComponent";
import { HowItWorks } from "@/components/leap-year/HowItWorks";
import { WhyUseSection } from "@/components/leap-year/WhyUseSection";
import { FAQ } from "@/components/leap-year/FAQ";
import type { PageContext } from "@/types";

const LeapYearCalculator = ({ pageContext }: { pageContext?: PageContext }) => {
  const { exports: { documentProps } = {} } = pageContext || {};
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80";

  return (
    <>
      <Helmet>
        <title>{documentProps?.title || "Leap Year Calculator - Check if a Year is a Leap Year"}</title>
        <meta
          name="description"
          content={documentProps?.description || "Calculate if any year is a leap year. Learn about leap year rules and why we need them in our calendar system."}
        />
        <meta
          name="keywords"
          content={documentProps?.keywords || "leap year calculator, leap year checker, is it a leap year, leap year rules"}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={documentProps?.ogUrl || `${websiteUrl}/leap-year-calculator`} />
        <meta property="og:title" content={documentProps?.ogTitle || "Leap Year Calculator - Check if a Year is a Leap Year"} />
        <meta
          property="og:description"
          content={documentProps?.ogDescription || "Calculate if any year is a leap year. Learn about leap year rules and why we need them in our calendar system."}
        />
        <meta
          property="og:image"
          content={documentProps?.ogImage || pageImage}
        />
        
        {/* Twitter */}
        <meta property="twitter:card" content={documentProps?.twitterCard || "summary_large_image"} />
        <meta property="twitter:url" content={documentProps?.ogUrl || `${websiteUrl}/leap-year-calculator`} />
        <meta property="twitter:title" content={documentProps?.twitterTitle || "Leap Year Calculator - Check if a Year is a Leap Year"} />
        <meta
          property="twitter:description"
          content={documentProps?.twitterDescription || "Calculate if any year is a leap year. Learn about leap year rules and why we need them in our calendar system."}
        />
        <meta
          property="twitter:image"
          content={documentProps?.twitterImage || pageImage}
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container max-w-4xl mx-auto px-4 py-8 space-y-8">
          <LeapYearCalculatorComponent />
          <HowItWorks />
          <WhyUseSection />
          <FAQ />
        </main>
      </div>
    </>
  );
};

export default LeapYearCalculator;

// SSR document properties
export function getDocumentProps() {
  return {
    title: "Leap Year Calculator - Check if a Year is a Leap Year",
    description: "Calculate if any year is a leap year. Learn about leap year rules and why we need them in our calendar system.",
    keywords: "leap year calculator, leap year checker, is it a leap year, leap year rules",
    ogTitle: "Leap Year Calculator - Check if a Year is a Leap Year",
    ogDescription: "Calculate if any year is a leap year. Learn about leap year rules and why we need them in our calendar system.",
    ogImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80",
    ogUrl: "https://agecalculator.app/leap-year-calculator",
    twitterCard: "summary_large_image",
    twitterTitle: "Leap Year Calculator - Check if a Year is a Leap Year",
    twitterDescription: "Calculate if any year is a leap year. Learn about leap year rules and why we need them in our calendar system.",
    twitterImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalUrl: "https://agecalculator.app/leap-year-calculator"
  };
}
