import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Search,
  Lightbulb,
  FileCheck,
  Presentation,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Use Cases | Optimze.ai',
  description:
    'Discover how Aster Intel helps MedTech investors and corporate strategy teams make faster, more defensible investment decisions through AI-powered analysis.',
  openGraph: {
    title: 'Use Cases | Aster Intel',
    description:
      'Comprehensive solutions for every stage of the MedTech investment process.',
  },
};

export default function UseCases() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold mb-8 md:mb-10 leading-tight"
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
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 md:mb-14 max-w-3xl mx-auto leading-relaxed">
              Discover how Aster Intel helps MedTech investors and corporate strategy teams make
              faster, more defensible investment decisions
            </p>
            <Link
              href="/about/contact"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all shadow-lg hover:scale-105 text-lg flex items-center gap-2 mx-auto relative overflow-hidden"
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

      {/* Use Cases Grid */}
      <section className="py-20 md:py-28 bg-white">
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
                Our Use Cases
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Comprehensive solutions for every stage of the MedTech investment process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Early Deal Screening */}
              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Search className="w-6 h-6" style={{ color: '#00152E' }} />
                  </div>
                  <h3 
                    className="text-xl mb-3"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Early Deal Screening
                  </h3>
                  <p style={{ color: '#374151' }}>
                    Rapidly filter opportunities to focus on the most promising investments. Use
                    AI-powered analysis to quickly identify companies that match your investment
                    criteria and strategic goals.
                  </p>
                </div>
              </AnimatedSection>

              {/* Concept Case Development */}
              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6" style={{ color: '#00152E' }} />
                  </div>
                  <h3 
                    className="text-xl mb-3"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Concept Case Development
                  </h3>
                  <p style={{ color: '#374151' }}>
                    Validate investment thesis early with comprehensive analysis. Build a strong
                    investment case using AI-driven insights and expert knowledge before committing
                    significant resources.
                  </p>
                </div>
              </AnimatedSection>

              {/* Full Diligence Support */}
              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <FileCheck className="w-6 h-6" style={{ color: '#00152E' }} />
                  </div>
                  <h3 
                    className="text-xl mb-3"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Full Diligence Support
                  </h3>
                  <p style={{ color: '#374151' }}>
                    Deep dive analysis for comprehensive due diligence processes. Access detailed
                    reports on market dynamics, competitive landscape, regulatory considerations, and
                    financial projections.
                  </p>
                </div>
              </AnimatedSection>

              {/* IC Preparation */}
              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Presentation className="w-6 h-6" style={{ color: '#00152E' }} />
                  </div>
                  <h3 
                    className="text-xl mb-3"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    IC Preparation
                  </h3>
                  <p style={{ color: '#374151' }}>
                    Investment Committee ready reports with comprehensive analysis. Present your
                    findings with confidence using detailed, well-structured reports that address all
                    key investment considerations.
                  </p>
                </div>
              </AnimatedSection>

              {/* Portfolio & Strategic Fit */}
              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 transition-all hover:scale-105 hover:shadow-lg cursor-default h-full md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6" style={{ color: '#00152E' }} />
                  </div>
                  <h3 
                    className="text-xl mb-3"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Portfolio & Strategic Fit
                  </h3>
                  <p style={{ color: '#374151' }}>
                    Post-investment monitoring and strategic alignment analysis. Track portfolio
                    company performance and evaluate strategic fit with your overall investment
                    strategy.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
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
                Ready to Transform Your Investment Process?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                See how Aster Intel can help you make faster, more informed MedTech investment
                decisions
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
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
