import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { RetirementCalculatorComponent } from "@/components/retirement/RetirementCalculatorComponent";
import type { PageContext } from "@/types";

const Retirement = ({ pageContext }: { pageContext?: PageContext }) => {
  const { exports: { documentProps } = {} } = pageContext || {};
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80";

  return (
    <>
      <Helmet>
        <title>{documentProps?.title || "Retirement Age Calculator - Plan Your Retirement"}</title>
        <meta
          name="description"
          content={documentProps?.description || "Calculate your retirement age and plan for your future with our easy-to-use retirement calculator."}
        />
        <meta
          name="keywords"
          content={documentProps?.keywords || "retirement calculator, retirement age, retirement planning, retirement savings calculator"}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={documentProps?.ogUrl || `${websiteUrl}/retirement`} />
        <meta
          property="og:title"
          content={documentProps?.ogTitle || "Retirement Age Calculator - Plan Your Retirement"}
        />
        <meta
          property="og:description"
          content={documentProps?.ogDescription || "Calculate your retirement age and plan for your future with our easy-to-use retirement calculator."}
        />
        <meta
          property="og:image"
          content={documentProps?.ogImage || pageImage}
        />
        
        {/* Twitter */}
        <meta property="twitter:card" content={documentProps?.twitterCard || "summary_large_image"} />
        <meta property="twitter:url" content={documentProps?.ogUrl || `${websiteUrl}/retirement`} />
        <meta property="twitter:title" content={documentProps?.twitterTitle || "Retirement Age Calculator - Plan Your Retirement"} />
        <meta
          property="twitter:description"
          content={documentProps?.twitterDescription || "Calculate your retirement age and plan for your future with our easy-to-use retirement calculator."}
        />
        <meta
          property="twitter:image"
          content={documentProps?.twitterImage || pageImage}
        />
      </Helmet>
      <Navigation />
      <RetirementCalculatorComponent />
    </>
  );
};

export default Retirement;

// SSR document properties
export function getDocumentProps() {
  return {
    title: "Retirement Age Calculator - Plan Your Retirement",
    description: "Calculate your retirement age and plan for your future with our easy-to-use retirement calculator.",
    keywords: "retirement calculator, retirement age, retirement planning, retirement savings calculator",
    ogTitle: "Retirement Age Calculator - Plan Your Retirement",
    ogDescription: "Calculate your retirement age and plan for your future with our easy-to-use retirement calculator.",
    ogImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80",
    ogUrl: "https://agecalculator.app/retirement",
    twitterCard: "summary_large_image",
    twitterTitle: "Retirement Age Calculator - Plan Your Retirement",
    twitterDescription: "Calculate your retirement age and plan for your future with our easy-to-use retirement calculator.",
    twitterImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalUrl: "https://agecalculator.app/retirement"
  };
}
