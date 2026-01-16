'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo, memo } from 'react';
import {
  Brain,
  TrendingUp,
  Users,
  Shield,
  CheckCircle2,
  ArrowRight,
  Lock,
  Key,
  FileText,
  Search,
  Lightbulb,
  FileCheck,
  Presentation,
  BarChart3,
  Activity,
  Heart,
  Pill,
  Microscope,
  LineChart,
} from 'lucide-react';

// Constants for repeated values
const GRADIENT_TEXT = 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)';
const BUTTON_GRADIENT = 'linear-gradient(135deg, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)';
const BUTTON_ANIMATION = 'gradientShiftSlow 6s ease infinite, gradientGlowSubtle 4s ease-in-out infinite';
const DARK_BG = '#00152E';
const TEXT_DARK = '#00152E';
const TEXT_GRAY = '#374151';

// Simple and smooth Decision Intelligence animation
const DecisionIntelligenceAnimation = memo(function DecisionIntelligenceAnimation() {
  const icons = useMemo(() => [Brain, TrendingUp, BarChart3, Activity, LineChart], []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % icons.length);
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [icons.length]);

  const CurrentIcon = icons[currentIndex];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Pulsing gradient orb */}
      <div className="absolute rounded-full opacity-30 animate-pulse" style={{
        width: '250px',
        height: '250px',
        maxWidth: '70%',
        maxHeight: '70%',
        background: 'radial-gradient(circle, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }} />

      {/* Central icon with smooth transition */}
      <div className="relative z-10">
        <div
          className="flex items-center justify-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.85) rotate(-5deg)',
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, rgba(109, 118, 235, 0.2), rgba(83, 213, 232, 0.2))',
            boxShadow: '0 0 25px rgba(109, 118, 235, 0.4)',
          }}>
            <CurrentIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden flex items-center" 
        style={{ 
          backgroundColor: DARK_BG,
          minHeight: 'calc(100vh - 20px)',
          height: 'calc(100vh - 20px)',
        }}
      >
        {/* Floating particles - subtle and elegant, well distributed */}
        {useMemo(() => {
          const particleCount = 90;
          const safeMargin = 8;
          const particles = [];
          
          // Pre-calculate particle positions for better performance
          for (let i = 0; i < particleCount; i++) {
            let randomX: number = 50;
            let randomY: number = 50;
            const distribution = i % 10;
            
            if (distribution < 4) {
              const corner = i % 4;
              const cornerMargin = 5;
              const cornerSpread = 20;
              
              switch(corner) {
                case 0:
                  randomX = cornerMargin + Math.random() * cornerSpread;
                  randomY = cornerMargin + Math.random() * cornerSpread;
                  break;
                case 1:
                  randomX = 100 - cornerMargin - Math.random() * cornerSpread;
                  randomY = cornerMargin + Math.random() * cornerSpread;
                  break;
                case 2:
                  randomX = cornerMargin + Math.random() * cornerSpread;
                  randomY = 100 - cornerMargin - Math.random() * cornerSpread;
                  break;
                case 3:
                  randomX = 100 - cornerMargin - Math.random() * cornerSpread;
                  randomY = 100 - cornerMargin - Math.random() * cornerSpread;
                  break;
              }
            } else if (distribution < 7) {
              const edge = i % 4;
              const edgeMargin = 10;
              
              switch(edge) {
                case 0:
                  randomX = edgeMargin + Math.random() * (100 - edgeMargin * 2);
                  randomY = edgeMargin + Math.random() * 15;
                  break;
                case 1:
                  randomX = 100 - edgeMargin - Math.random() * 15;
                  randomY = edgeMargin + Math.random() * (100 - edgeMargin * 2);
                  break;
                case 2:
                  randomX = edgeMargin + Math.random() * (100 - edgeMargin * 2);
                  randomY = 100 - edgeMargin - Math.random() * 15;
                  break;
                case 3:
                  randomX = edgeMargin + Math.random() * 15;
                  randomY = edgeMargin + Math.random() * (100 - edgeMargin * 2);
                  break;
              }
            } else {
              const centerX = 50;
              const centerY = 50;
              const minRadius = 15;
              const maxRadius = 35;
              const angle = (i * 137.508) % 360;
              const radius = minRadius + Math.random() * (maxRadius - minRadius);
              randomX = centerX + Math.cos((angle * Math.PI) / 180) * radius;
              randomY = centerY + Math.sin((angle * Math.PI) / 180) * radius;
            }
            
            const size = 2 + (i % 4);
            const halfSize = size / 2;
            const safeX = Math.max(safeMargin, Math.min(100 - safeMargin, randomX));
            const safeY = Math.max(safeMargin, Math.min(100 - safeMargin, randomY));
            const colorIndex = i % 3;
            const colorRgb = colorIndex === 0 ? '109, 118, 235' : colorIndex === 1 ? '83, 213, 232' : '121, 76, 236';
            const opacity = 0.3 + colorIndex * 0.1;
            
            particles.push({
              key: `hero-particle-${i}`,
              size,
              halfSize,
              safeX,
              safeY,
              colorRgb,
              opacity,
              animationDuration: 4 + (i % 5) * 0.8,
              animationDelay: (i * 0.15) % 5,
            });
          }
          
          return particles;
        }, []).map((particle) => (
          <div
            key={particle.key}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle at 30% 30%, rgba(${particle.colorRgb}, ${particle.opacity}), rgba(${particle.colorRgb}, 0.05))`,
              top: `calc(${particle.safeY}% - ${particle.halfSize}px)`,
              left: `calc(${particle.safeX}% - ${particle.halfSize}px)`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(${particle.colorRgb}, 0.25)`,
              animation: `particleFloatSmooth ${particle.animationDuration}s ease-in-out infinite`,
              animationDelay: `${particle.animationDelay}s`,
              willChange: 'transform, opacity',
              filter: 'blur(0.3px)',
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="text-left">
                <h1 
                  className="mb-8 md:mb-10 text-4xl md:text-5xl lg:text-6xl font-bold"
                  style={{ 
                    lineHeight: '1.1', 
                    overflow: 'visible', 
                    margin: '0', 
                    padding: '0',
                    fontWeight: 800,
                    letterSpacing: '-1.92px',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      lineHeight: '1.1',
                      backgroundImage: GRADIENT_TEXT,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      margin: '0',
                      padding: '0',
                    }}
                  >
                    Decision Intelligence
                  </span>
                  <span 
                    style={{
                      display: 'block',
                      lineHeight: '1.1',
                      color: 'white',
                      margin: '0',
                      padding: '0',
                      marginTop: '0',
                    }}
                  >
                    for MedTech Investments
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-12 md:mb-14 leading-relaxed">
                  Aster Intel helps MedTech investors and corporate strategy teams make faster, more
                  defensible decisions using the latest AI models, experiential learning, and expert
                  insight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Link
                    href="/about/contact"
                    className="px-8 py-4 rounded-lg font-semibold text-white transition-all shadow-lg hover:scale-105 text-lg flex items-center gap-2 relative overflow-hidden"
                    style={{
                      background: BUTTON_GRADIENT,
                      backgroundSize: '200% 200%',
                      animation: BUTTON_ANIMATION,
                    }}
                  >
                    <span className="relative z-10">Request a Demo</span>
                    <ArrowRight className="w-5 h-5 relative z-10" />
                  </Link>
                  <Link
                    href="/about/contact"
                    className="bg-white text-gray-900 border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              
              {/* Right side - Animation */}
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <DecisionIntelligenceAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4"
                style={{
                  fontWeight: 800,
                  letterSpacing: '-1.92px',
                  backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                The Challenge
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
              <p 
                className="text-lg md:text-xl leading-relaxed text-center"
                style={{ color: TEXT_GRAY }}
              >
                MedTech investment decisions require deep analysis of complex scientific data, regulatory
                landscapes, and market dynamics. Traditional research methods struggle to keep pace with
                the volume and velocity of information needed for confident investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASTER Advantage Section - 3 Column Grid */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4"
                style={{
                  fontWeight: 800,
                  letterSpacing: '-1.92px',
                  backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                The Advantage
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Three core capabilities that set Aster Intel apart in MedTech investment intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Latest AI Models */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 cursor-default group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'linear-gradient(135deg, rgba(109, 118, 235, 0.15), rgba(83, 213, 232, 0.15))' }}>
                  <Brain className="w-7 h-7 transition-colors duration-300" style={{ color: 'rgb(109, 118, 235)' }} />
                </div>
                <h3 
                  className="text-2xl mb-4 transition-colors duration-300 group-hover:text-accent" 
                  style={{ 
                    color: '#00152E !important', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Latest AI Models
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: TEXT_GRAY }}
                >
                  Leveraging state-of-the-art AI models for deep analysis of scientific literature,
                  clinical data, and market intelligence.
                </p>
              </div>

              {/* Experiential Learning */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 cursor-default group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'linear-gradient(135deg, rgba(83, 213, 232, 0.15), rgba(90, 189, 233, 0.15))' }}>
                  <TrendingUp className="w-7 h-7 transition-colors duration-300" style={{ color: 'rgb(83, 213, 232)' }} />
                </div>
                <h3 
                  className="text-2xl mb-4 transition-colors duration-300 group-hover:text-accent" 
                  style={{ 
                    color: '#00152E !important', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Experiential Learning
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: TEXT_GRAY }}
                >
                  Institutional knowledge base that captures and applies insights from past
                  investments and industry patterns.
                </p>
              </div>

              {/* Experts in the Loop */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 cursor-default group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'linear-gradient(135deg, rgba(90, 189, 233, 0.15), rgba(121, 76, 236, 0.15))' }}>
                  <Users className="w-7 h-7 transition-colors duration-300" style={{ color: 'rgb(90, 189, 233)' }} />
                </div>
                <h3 
                  className="text-2xl mb-4 transition-colors duration-300 group-hover:text-accent" 
                  style={{ 
                    color: '#00152E !important', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Experts in the Loop
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: TEXT_GRAY }}
                >
                  Verified human insight integrated throughout the analysis process to ensure
                  accuracy and strategic context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4"
                style={{
                  fontWeight: 800,
                  letterSpacing: '-1.92px',
                  backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Use Cases
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            </div>
            {/* Grid layout: 2 columns on desktop, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Early Deal Screening */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-xl mb-3" 
                  style={{ 
                    color: TEXT_DARK, 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Early Deal Screening
                </h3>
                <p style={{ color: '#374151' }}>
                  Rapidly filter opportunities to focus on the most promising investments
                </p>
              </div>

              {/* Concept Case Development */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-xl mb-3" 
                  style={{ 
                    color: TEXT_DARK, 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Concept Case Development
                </h3>
                <p style={{ color: '#374151' }}>
                  Validate investment thesis early with comprehensive analysis
                </p>
              </div>

              {/* Full Diligence Support */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-xl mb-3" 
                  style={{ 
                    color: TEXT_DARK, 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Full Diligence Support
                </h3>
                <p style={{ color: '#374151' }}>
                  Deep dive analysis for comprehensive due diligence processes
                </p>
              </div>

              {/* IC Preparation */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Presentation className="w-6 h-6" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-xl mb-3" 
                  style={{ 
                    color: TEXT_DARK, 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  IC Preparation
                </h3>
                <p style={{ color: '#374151' }}>
                  Investment Committee ready reports with comprehensive analysis
                </p>
              </div>

              {/* Portfolio & Strategic Fit */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-xl mb-3" 
                  style={{ 
                    color: TEXT_DARK, 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Portfolio & Strategic Fit
                </h3>
                <p style={{ color: '#374151' }}>
                  Post-investment monitoring and strategic alignment analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What ASTER Enables Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4"
                style={{
                  fontWeight: 800,
                  letterSpacing: '-1.92px',
                  backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                What Aster Intel Enables
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                <div>
                  <h4 
                    className="mb-2" 
                    style={{ 
                      color: TEXT_DARK, 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Faster Deal Evaluation
                  </h4>
                  <p style={{ color: '#374151' }}>
                    Accelerate deal screening and evaluation processes with AI-powered analysis
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                <div>
                  <h4 
                    className="mb-2" 
                    style={{ 
                      color: TEXT_DARK, 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Investment Committee Ready
                  </h4>
                  <p style={{ color: '#374151' }}>
                    Comprehensive due diligence reports ready for investment committees
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                <div>
                  <h4 
                    className="mb-2" 
                    style={{ 
                      color: TEXT_DARK, 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Data-Driven Insights
                  </h4>
                  <p style={{ color: '#374151' }}>
                    Support more defensible investment decisions with comprehensive data analysis
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                <div>
                  <h4 
                    className="mb-2" 
                    style={{ 
                      color: TEXT_DARK, 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Institutional Knowledge
                  </h4>
                  <p style={{ color: '#374151' }}>
                    Capture and apply insights across your portfolio for continuous improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Trust Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4"
                style={{
                  fontWeight: 800,
                  letterSpacing: '-1.92px',
                  backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Enterprise Trust
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Built with enterprise-grade security and governance from the ground up
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 text-center shadow-md border border-gray-200">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-xl font-montserrat font-extrabold mb-2"
                  style={{ color: '#00152E', fontWeight: 800 }}
                >
                  Tenant Isolation
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: TEXT_GRAY }}
                >
                  Complete data separation and privacy protection
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center shadow-md border border-gray-200">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-xl font-montserrat font-extrabold mb-2"
                  style={{ color: '#00152E', fontWeight: 800 }}
                >
                  SSO/RBAC
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: TEXT_GRAY }}
                >
                  Enterprise identity and access management
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center shadow-md border border-gray-200">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-xl font-montserrat font-extrabold mb-2"
                  style={{ color: '#00152E', fontWeight: 800 }}
                >
                  Auditability
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: TEXT_GRAY }}
                >
                  Complete audit trails and compliance tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-4xl font-montserrat font-extrabold mb-6"
              style={{
                fontWeight: 800,
                letterSpacing: '-1.92px',
                backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Who It&apos;s For
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
              <p 
                className="text-xl leading-relaxed mb-6"
                style={{ color: TEXT_GRAY }}
              >
                Aster Intel is designed for MedTech investors, corporate strategy teams, and investment
                committees who need faster, more informed decision-making backed by comprehensive
                data analysis and expert insight.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span 
                  className="px-4 py-2 rounded-full font-medium transition-all hover:scale-105 cursor-default"
                  style={{ backgroundColor: '#00152E', color: 'white' }}
                >
                  MedTech Investors
                </span>
                <span 
                  className="px-4 py-2 rounded-full font-medium transition-all hover:scale-105 cursor-default"
                  style={{ backgroundColor: '#00152E', color: 'white' }}
                >
                  Corporate Strategy Teams
                </span>
                <span 
                  className="px-4 py-2 rounded-full font-medium transition-all hover:scale-105 cursor-default"
                  style={{ backgroundColor: '#00152E', color: 'white' }}
                >
                  Investment Committees
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold mb-6"
              style={{
                fontWeight: 800,
                letterSpacing: '-1.92px',
                backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Ready to Transform Your Investment Process?
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Discover how Aster Intel can accelerate your MedTech investment decisions with
              AI-powered intelligence and expert insight.
            </p>
            <Link
              href="/about/contact"
              className="inline-block px-10 py-5 rounded-lg font-semibold text-white transition-all shadow-xl hover:scale-105 text-lg flex items-center gap-2 mx-auto relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShiftSlow 6s ease infinite, gradientGlowSubtle 4s ease-in-out infinite',
              }}
            >
              <span className="relative z-10">Request a Demo</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
