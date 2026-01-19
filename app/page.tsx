import Hero from "@/components/home/Hero";
import LocationSection from "@/components/home/LocationSection";
import LocationDetails from "@/components/home/LocationDetails";
import LuxuryHero from "@/components/home/LuxuryHero";
// import VideoHero from "@/components/home/VideoHero";
import Connectivity from "@/components/home/Connectivity";
import ResidencesShowcase from "@/components/home/ResidencesShowcase";
import ElieSection from "@/components/home/ElieSection";
import Maison from "@/components/home/Maison";
import Footer from "@/components/home/Footer";




export default function Home() {
  return (
    <main>
      <Hero />
      <LocationSection />
      <LuxuryHero />
      <LocationDetails />
      {/* <VideoHero /> */}
      <Connectivity />
      <ResidencesShowcase />
      <ElieSection/>
      <Maison/>
      <Footer/>
      
      
    
     
    </main>
  );
}
