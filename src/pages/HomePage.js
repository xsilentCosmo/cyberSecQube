import About from '@/components/About'
import CallToAction from '@/components/CallToAction'
import JoinUsSection from '@/components/Contact'
import Courses from '@/components/home/Courses'
import FAQ from '@/components/home/FAQ'
import Hero from '@/components/home/Hero'
import MissionVision from '@/app/about/MissionVision'
import OurValues from '@/components/home/Values'
import React from 'react'

function HomePage() {
  return (
    <>
    <Hero/>
    <OurValues/>
    <MissionVision/>
    {/* <About/> */}
    <Courses/>
    <CallToAction/>
    <JoinUsSection/>
    </>
  )
}

export default HomePage