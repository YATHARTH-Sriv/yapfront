import CoreValues from "@/components/Helpers/CoreValues";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black relative overflow-hidden">
      <Navbar />
      <Hero />
      <Info />
      <CoreValues />
      <FAQs/>
      <Footer />
    </main>
  )
}
