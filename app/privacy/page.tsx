import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aster Intel',
  description:
    'Learn how Aster Intel collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacy() {
  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-4" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg border border-gray-200">
              {/* Header */}
              <div className="mb-8 pb-8 border-b border-gray-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6" style={{ color: '#00152E' }} />
                  </div>
                  <h1 
                    className="text-3xl md:text-4xl font-bold"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Privacy Policy
                  </h1>
                </div>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none leading-relaxed space-y-6" style={{ color: '#374151' }}>
                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    1. Introduction
                  </h2>
                  <p>
                    Aster Intel (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                    visit our website and use our services.
                  </p>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    2. Information We Collect
                  </h2>
                  <p className="mb-3">We may collect information about you in a variety of ways:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Personal Information:</strong> Name, email address, company name, job title, and other
                      information you provide when contacting us or requesting a demo.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Information about how you access and use our website, including IP
                      address, browser type, pages visited, and time spent on pages.
                    </li>
                    <li>
                      <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking
                      technologies to track activity on our website and store certain information.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    3. How We Use Your Information
                  </h2>
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Analyze usage patterns and improve our website</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    4. Data Security
                  </h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                    transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    5. Data Retention
                  </h2>
                  <p>
                    We will retain your personal information only for as long as necessary to fulfill the purposes
                    outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    6. Your Rights
                  </h2>
                  <p className="mb-3">Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate data</li>
                    <li>Deletion of your personal information</li>
                    <li>Objection to processing of your personal information</li>
                    <li>Data portability</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    7. Third-Party Services
                  </h2>
                  <p>
                    Our website may contain links to third-party websites or services. We are not responsible for the
                    privacy practices of these third parties. We encourage you to read their privacy policies.
                  </p>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    8. Children&apos;s Privacy
                  </h2>
                  <p>
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect
                    personal information from children.
                  </p>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    9. Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>

                <section>
                  <h2 
                    className="text-2xl font-semibold mb-4 mt-8"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    10. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <Link href="/about/contact" className="text-accent hover:underline">
                      our contact page
                    </Link>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
