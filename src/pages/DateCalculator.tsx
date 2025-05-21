import { Navigation } from "@/components/Navigation";
import { DateCalculatorComponent } from "@/components/date-calculator/DateCalculatorComponent";
import { Helmet } from "react-helmet";
import type { PageContext } from "@/types";

const DateCalculator = ({ pageContext }: { pageContext?: PageContext }) => {
  const { exports: { documentProps } = {} } = pageContext || {};
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1506784983877-45594efa4cbe"; // Clipboard with calendar image

  return (
    <>
      <Helmet>
        <title>{documentProps?.title || "Date Calculator - Calculate Days Between Dates & More"}</title>
        <meta 
          name="description" 
          content={documentProps?.description || "Free online date calculator to find days between dates, add/subtract days, and calculate business days. Easy-to-use tool for date calculations and planning."} 
        />
        <meta 
          name="keywords" 
          content={documentProps?.keywords || "date calculator, days between dates, date difference calculator, business days calculator, add days calculator"} 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={documentProps?.ogUrl || `${websiteUrl}/date-calculator`} />
        <meta property="og:title" content={documentProps?.ogTitle || "Date Calculator - Calculate Days Between Dates & More"} />
        <meta property="og:description" content={documentProps?.ogDescription || "Free online date calculator to find days between dates, add/subtract days, and calculate business days."} />
        <meta property="og:image" content={documentProps?.ogImage || pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content={documentProps?.twitterCard || "summary_large_image"} />
        <meta property="twitter:url" content={documentProps?.ogUrl || `${websiteUrl}/date-calculator`} />
        <meta property="twitter:title" content={documentProps?.twitterTitle || "Date Calculator - Calculate Days Between Dates & More"} />
        <meta property="twitter:description" content={documentProps?.twitterDescription || "Free online date calculator to find days between dates, add/subtract days, and calculate business days."} />
        <meta property="twitter:image" content={documentProps?.twitterImage || pageImage} />
      </Helmet>
      <Navigation />
      <DateCalculatorComponent />
    </>
  );
};

export default DateCalculator;

// SSR document properties
export function getDocumentProps() {
  return {
    title: "Date Calculator - Calculate Days Between Dates & More",
    description: "Free online date calculator to find days between dates, add/subtract days, and calculate business days. Easy-to-use tool for date calculations and planning.",
    keywords: "date calculator, days between dates, date difference calculator, business days calculator, add days calculator",
    ogTitle: "Date Calculator - Calculate Days Between Dates & More",
    ogDescription: "Free online date calculator to find days between dates, add/subtract days, and calculate business days.",
    ogImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    ogUrl: "https://agecalculator.app/date-calculator",
    twitterCard: "summary_large_image",
    twitterTitle: "Date Calculator - Calculate Days Between Dates & More",
    twitterDescription: "Free online date calculator to find days between dates, add/subtract days, and calculate business days.",
    twitterImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    canonicalUrl: "https://agecalculator.app/date-calculator"
  };
}
