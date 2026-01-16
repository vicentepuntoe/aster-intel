import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Brain,
  TrendingUp,
  Users,
  ArrowRight,
  Database,
  Zap,
  Shield,
  BarChart3,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Platform | Optimze.ai',
  description:
    'A comprehensive decision intelligence platform designed for MedTech investors and corporate strategy teams. Discover our AI-powered capabilities.',
  openGraph: {
    title: 'Platform | Aster Intel',
    description:
      'A comprehensive decision intelligence platform designed for MedTech investors and corporate strategy teams.',
  },
};

export default function Platform() {
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
              The Aster Intel Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 md:mb-14 max-w-3xl mx-auto leading-relaxed">
              A comprehensive decision intelligence platform designed for MedTech investors and
              corporate strategy teams
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

      {/* Core Advantages */}
      <section className="py-20 md:py-28 bg-white">
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
                The Advantage
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Three core pillars that power our decision intelligence platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8" style={{ color: '#00152E' }} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-extrabold mb-4" style={{ color: '#00152E', fontWeight: 800 }}>
                    Latest AI Models
                  </h3>
                  <p className="text-gray-700">
                    Leveraging state-of-the-art AI models for deep analysis and comprehensive
                    insights
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8" style={{ color: '#00152E' }} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-extrabold mb-4" style={{ color: '#00152E', fontWeight: 800 }}>
                    Experiential Learning
                  </h3>
                  <p className="text-gray-700">
                    Institutional knowledge base that learns and improves from every interaction
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8" style={{ color: '#00152E' }} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-extrabold mb-4" style={{ color: '#00152E', fontWeight: 800 }}>
                    Experts in the Loop
                  </h3>
                  <p className="text-gray-700">
                    Verified human insight integrated with AI-powered analysis for the best
                    decisions
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
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
                Platform Capabilities
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <Database className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                  <div>
                    <h3 className="text-xl font-montserrat font-extrabold mb-2" style={{ color: '#00152E', fontWeight: 800 }}>
                      Comprehensive Data Integration
                    </h3>
                    <p className="text-gray-700">
                      Seamlessly integrate data from multiple sources for a complete view of every
                      opportunity
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                  <div>
                    <h3 className="text-xl font-montserrat font-extrabold mb-2" style={{ color: '#00152E', fontWeight: 800 }}>
                      Real-Time Analysis
                    </h3>
                    <p className="text-gray-700">
                      Fast, accurate analysis powered by advanced AI models for quick decision-making
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <BarChart3 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                  <div>
                    <h3 className="text-xl font-montserrat font-extrabold mb-2" style={{ color: '#00152E', fontWeight: 800 }}>
                      Advanced Analytics
                    </h3>
                    <p className="text-gray-700">
                      Deep insights and comprehensive reports for investment committees and strategic
                      planning
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <Shield className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                  <div>
                    <h3 className="text-xl font-montserrat font-extrabold mb-2" style={{ color: '#00152E', fontWeight: 800 }}>
                      Enterprise Security
                    </h3>
                    <p className="text-gray-700">
                      Built with enterprise-grade security, compliance, and governance from the ground
                      up
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Experience the power of decision intelligence for MedTech investments
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
