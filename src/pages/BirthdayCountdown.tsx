import { Navigation } from "@/components/Navigation";
import { BirthdayCountdownTimer } from "@/components/birthday-countdown/BirthdayCountdownTimer";
import { Helmet } from "react-helmet";
import type { PageContext } from "@/types";

const BirthdayCountdown = ({ pageContext }: { pageContext?: PageContext }) => {
  const { exports: { documentProps } = {} } = pageContext || {};
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1558636508-e0db3814bd1d"; // Birthday decorations image

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{documentProps?.title || "Birthday Countdown - Track Days Until Your Birthday"}</title>
        <meta 
          name="description" 
          content={documentProps?.description || "Count down the days, hours, minutes, and seconds until your next birthday with our interactive birthday countdown timer. Get excited about your special day!"} 
        />
        <meta 
          name="keywords" 
          content={documentProps?.keywords || "birthday countdown, days until birthday, birthday timer, birthday calculator"} 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={documentProps?.ogUrl || `${websiteUrl}/birthday-countdown`} />
        <meta property="og:title" content={documentProps?.ogTitle || "Birthday Countdown - Track Days Until Your Birthday"} />
        <meta property="og:description" content={documentProps?.ogDescription || "Count down the days until your next birthday with our interactive countdown timer."} />
        <meta property="og:image" content={documentProps?.ogImage || pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content={documentProps?.twitterCard || "summary_large_image"} />
        <meta property="twitter:url" content={documentProps?.ogUrl || `${websiteUrl}/birthday-countdown`} />
        <meta property="twitter:title" content={documentProps?.twitterTitle || "Birthday Countdown - Track Days Until Your Birthday"} />
        <meta property="twitter:description" content={documentProps?.twitterDescription || "Count down the days until your next birthday with our interactive countdown timer."} />
        <meta property="twitter:image" content={documentProps?.twitterImage || pageImage} />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <BirthdayCountdownTimer />
      </main>
    </div>
  );
};

export default BirthdayCountdown;

// SSR document properties
export function getDocumentProps() {
  return {
    title: "Birthday Countdown - Track Days Until Your Birthday",
    description: "Count down the days, hours, minutes, and seconds until your next birthday with our interactive birthday countdown timer. Get excited about your special day!",
    keywords: "birthday countdown, days until birthday, birthday timer, birthday calculator",
    ogTitle: "Birthday Countdown - Track Days Until Your Birthday",
    ogDescription: "Count down the days until your next birthday with our interactive countdown timer.",
    ogImage: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d",
    ogUrl: "https://agecalculator.app/birthday-countdown",
    twitterCard: "summary_large_image",
    twitterTitle: "Birthday Countdown - Track Days Until Your Birthday",
    twitterDescription: "Count down the days until your next birthday with our interactive countdown timer.",
    twitterImage: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d",
    canonicalUrl: "https://agecalculator.app/birthday-countdown"
  };
}
