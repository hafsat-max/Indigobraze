import { AboutUs, HeroSection, NavBar, WhatWeDo,Footer, LiveSessions } from "@/src/components";
import { Testimonials } from "@/src/components/testimonials";

export default function Home() {
  return (
 <main className=""> 
    <NavBar/>
     <HeroSection/>
     <WhatWeDo/>
     <AboutUs/>
    meet our career team ...
     <LiveSessions/>
     {/* <Testimonial/> */}
     <Testimonials/>
     <Footer/>
 </main>
  );
}
