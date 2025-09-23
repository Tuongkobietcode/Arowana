import React from 'react' // <-- Add this line
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layout/Header'
import './App.css'
import HeroSlider from './components/HeroSlider'
import FeatureSection from './components/FeatureSection'
import BannerSection from './components/BannerSection'
import ProductCarousel from './components/ProductsCarousel'
import ProductsBanner from './components/ProductsBanner'
import ProductCarousel2 from './components/ProductsCarousel2' 
import TextCarousel from './components/Testimonial' 
import NewsletterSection from './components/NewsletterSection'
import BrandSection from './components/BrandSection'
import PromoSection from './components/PromoSection'
import Footer from './components/layout/Footer'
import ScrollToTopButton from './components/layout/ScrollToTop'

function App() {
  return (
    <div>
      <Header />
      <HeroSlider/>
      <FeatureSection/>
      <BannerSection/>
      <ProductCarousel/>
      <ProductsBanner/>
      <ProductCarousel2/>
      <TextCarousel/>
      <NewsletterSection/>
      <BrandSection/>
      <PromoSection/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
    
  )
}

export default App
