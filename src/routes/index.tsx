import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";



import { BuiltToScale } from "@/components/sections/BuiltToScale";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyClientsTrustUs } from "@/components/sections/WhyClientsTrustUs";
import { FindYourFit } from "@/components/sections/FindYourFit";
import { TalkToExpertCTA } from "@/components/sections/TalkToExpertCTA";
import { LatestArticles } from "@/components/sections/LatestArticles";
import { FAQ } from "@/components/sections/FAQ";



export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        
        <BuiltToScale />
        <HowItWorks />
        <WhatYouGet />
        <Testimonials />
        <WhyClientsTrustUs />
        <FindYourFit />
        <TalkToExpertCTA />
        <LatestArticles />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
