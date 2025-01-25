// pages/index.js
import JoinUsSection from '@/components/Contact';
import Courses from '@/components/home/Courses';
import CallToAction from '@/components/CallToAction'
import Hero from '@/components/home/Hero';
import MissionVision from '@/components/home/MissionVision';
import OurValues from '@/components/home/Values';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      <OurValues />
      <MissionVision />
      <Courses />
      <CallToAction />
      {/* <JoinUsSection /> */}
      <FAQ/>
    </div>
  );
}
