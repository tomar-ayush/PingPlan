import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WearYourStory from "@/components/WearYourStory";
import FeatureCarousel from "@/components/FeaturesCarousel";
import PortfolioGrid from "@/components/PortfolioGrid";
import Timeline from "@/components/Timeline";
import Marquee from "@/components/Marquee";
import ContactForm from "@/components/ContactForm";
import NewsletterSubscribe from "@/components/NewsLetterSubscribe";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WearYourStory />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  );
}
