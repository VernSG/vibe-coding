import Image from "next/image";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stacks from '@/components/Stacks';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import AnimatedFooter from '@/components/AnimatedFooter';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        
        <main className="pt-20">
          <Hero />
          <Stacks />
          <Projects />
          <About />
          <Contact />
        </main>

        <AnimatedFooter />
      </div>
    {/* </div> */}
    </>
  );
}
