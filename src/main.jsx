import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header'
import Hero from './components/hero'
import Features from './components/feature'
import About from './components/about'
import Content from './components/contentup'
import AcademicPrograms from './components/AcademicPrograms'
import "./assets/css/app.css";
import "./assets/css/vendor/bootstrap.min.css";
import CampusArea from './components/CampusArea'
import Testimonial from './components/Testimonial'
import VideoArea from './components/VideoArea'
import CTA from './components/CTA'
import Events from './components/Events'
import BrandArea from './components/BrandArea'
import UniversityCTA from './components/UniversityCTA'
import Footer from "./components/Footer";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Features />
    <About />
    <Content />
    <AcademicPrograms />
    <CampusArea/>
    <Testimonial/>
    <VideoArea/>
    <CTA/>
    <Events/>
    <BrandArea/>
    <UniversityCTA/>
    <Footer/>
  </StrictMode>,
)
