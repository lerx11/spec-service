import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices";
import Tasks from "@/components/Tasks";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import PopularServices from "@/components/PopularServices";
import Cities from "@/components/Cities";
import RequestForm from "@/components/RequestForm";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Prices />
        <Tasks />
        <HowItWorks />
        <WhyUs />
        <PopularServices />
        <Cities />
        <RequestForm />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
