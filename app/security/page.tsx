import { Lock, Key, FileText, Shield, Database, Server, Mail, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function Security() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" style={{ color: '#00152E' }} />
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold mb-6 leading-tight"
              style={{
                fontWeight: 800,
                letterSpacing: '-1.92px',
                backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Security & Trust
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade security and governance built from the ground up
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise-grade by design */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg border border-gray-200 text-center">
                <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: '#00152E' }} />
                <h2 
                  className="text-3xl md:text-4xl font-montserrat font-extrabold mb-6"
                  style={{ 
                    color: '#00152E', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Enterprise-Grade by Design
                </h2>
                <p 
                  className="text-lg max-w-3xl mx-auto leading-relaxed"
                  style={{ color: '#374151' }}
                >
                  Our platform is architected with enterprise security as a foundational principle.
                  Every component, from data storage to AI processing, is designed to meet the highest
                  standards of security, compliance, and governance required by enterprise organizations.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Security Features */}
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
                Security & Governance Features
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Data Isolation & Privacy */}
              <AnimatedSection>
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg cursor-default h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8" style={{ color: '#00152E' }} />
                  </div>
                  <h3 
                    className="text-xl mb-4"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Data Isolation & Privacy
                  </h3>
                  <p style={{ color: '#374151' }}>
                    Complete tenant isolation ensures that each organization&apos;s data is fully
                    separated with strict logical and physical boundaries. No data leakage or cross-tenant
                    access is possible.
                  </p>
                </div>
              </AnimatedSection>

              {/* Identity & Access */}
              <AnimatedSection>
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg cursor-default h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Key className="w-8 h-8" style={{ color: '#00152E' }} />
                  </div>
                  <h3 
                    className="text-xl mb-4"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Identity & Access
                  </h3>
                  <p style={{ color: '#374151' }}>
                    Enterprise identity management through Single Sign-On (SSO) and comprehensive
                    Role-Based Access Control (RBAC). Granular permissions ensure users only access
                    what they need.
                  </p>
                </div>
              </AnimatedSection>

              {/* Auditability & Governance */}
              <AnimatedSection>
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg cursor-default h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8" style={{ color: '#00152E' }} />
                  </div>
                  <h3 
                    className="text-xl mb-4"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Auditability & Governance
                  </h3>
                  <p style={{ color: '#374151' }}>
                    Complete audit logs track all system activities, data access, and user actions.
                    Approval workflows ensure proper governance and compliance with regulatory
                    requirements.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* AI Governance */}
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
                AI Governance
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <Database className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                  <div>
                    <h3 
                      className="text-xl mb-2"
                      style={{ 
                        color: '#00152E', 
                        fontWeight: 800,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      No Training on Customer Data
                    </h3>
                    <p style={{ color: '#374151' }}>
                      We do not use customer data to train our AI models. Your data remains your data,
                      used solely for analysis and insights within your organization&apos;s isolated
                      environment.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 flex items-start gap-4 transition-all hover:scale-105 hover:shadow-lg cursor-default">
                  <Server className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#00152E' }} />
                  <div>
                    <h3 
                      className="text-xl mb-2"
                      style={{ 
                        color: '#00152E', 
                        fontWeight: 800,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      Controlled Backend Access
                    </h3>
                    <p style={{ color: '#374151' }}>
                      All backend access is strictly controlled, monitored, and logged. Only authorized
                      personnel with proper clearance can access system infrastructure, and all access
                      is subject to approval workflows.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Posture */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg border border-gray-200">
                <div className="text-center mb-8">
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-6" style={{ color: '#00152E' }} />
                  <h2 
                    className="text-3xl md:text-4xl font-montserrat font-extrabold mb-6"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Compliance Posture
                  </h2>
                </div>
                <p 
                  className="text-lg mb-8 max-w-2xl mx-auto text-center leading-relaxed"
                  style={{ color: '#374151' }}
                >
                  Our security controls and processes are aligned with SOC 2 Type II requirements. We
                  maintain a continuous compliance roadmap to ensure our platform meets and exceeds
                  industry standards for security, availability, processing integrity, confidentiality,
                  and privacy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <h3 
                      className="font-montserrat font-extrabold mb-2"
                      style={{ 
                        color: '#00152E', 
                        fontWeight: 800,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      SOC 2 Aligned
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: '#374151' }}
                    >
                      Security controls aligned with SOC 2 Type II standards
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 
                      className="font-montserrat font-extrabold mb-2"
                      style={{ 
                        color: '#00152E', 
                        fontWeight: 800,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      GDPR Compliant
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: '#374151' }}
                    >
                      Full compliance with data protection regulations
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 
                      className="font-montserrat font-extrabold mb-2"
                      style={{ 
                        color: '#00152E', 
                        fontWeight: 800,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      HIPAA Ready
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: '#374151' }}
                    >
                      Healthcare data protection standards
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact for Security Review */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gray-50 rounded-2xl p-10 md:p-12 shadow-lg border border-gray-200 text-center">
                <Mail className="w-16 h-16 mx-auto mb-6" style={{ color: '#00152E' }} />
                <h2 
                  className="text-3xl md:text-4xl font-montserrat font-extrabold mb-6"
                  style={{ 
                    color: '#00152E', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Contact for Security Review
                </h2>
                <p 
                  className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
                  style={{ color: '#374151' }}
                >
                  For enterprise security reviews, detailed compliance documentation, or security
                  questionnaires, please contact our security team.
                </p>
                <div className="bg-accent/10 rounded-lg p-6 inline-block">
                  <a
                    href="mailto:security@asterintel.com"
                    className="font-semibold text-lg transition-colors flex items-center gap-2 justify-center"
                    style={{ color: '#00152E' }}
                  >
                    <Mail className="w-5 h-5" style={{ color: '#00152E' }} />
                    security@asterintel.com
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
