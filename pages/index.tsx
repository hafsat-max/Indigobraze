import { AboutUs, HeroSection, NavBar, WhatWeDo,Footer, LiveSessions, MeetTheTeam } from "@/src/components";
import Newsletter from "@/src/components/newsletter";
import { Testimonials } from "@/src/components/testimonials";

export default function Home() {
  return (
 <main className=""> 
    <NavBar/>
     <HeroSection/>
     <WhatWeDo/>
     <AboutUs/>
     <MeetTheTeam/>
     <LiveSessions/>
     {/* <Testimonial/> */}
     <Testimonials/>
     <Newsletter/>
     <Footer/>
 </main>
  );
}
