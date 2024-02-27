import Image from "next/image";
import { motion } from 'framer-motion';
import { AboutUs, HeroSection, NavBar, WhatWeDo } from "@/src/components";

export default function Home() {
  return (
 <main className=""> 
    <NavBar/>
     <HeroSection/>
     <WhatWeDo/>
     <AboutUs/>
 </main>
  );
}
  //  <motion.div
  //       initial="hidden"
  //       whileInView="visible"
  //       viewport={{ once: true, amount: 0.5 }}
  //       transition={{ duration: 0.5 }}
  //       variants={{
  //         hidden: { opacity: 0, y: -50 },
  //         visible: { opacity: 1, y: 0 },
  //       }}
  //     >
  //     </motion.div>