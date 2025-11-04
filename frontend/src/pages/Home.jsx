import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Coaching from '../components/Coaching'
import MentorsGrid from '../components/MentorsGrid'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home(){
  return (
    <>
      <Hero />
      <Categories />
      <Coaching />
      <MentorsGrid />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
