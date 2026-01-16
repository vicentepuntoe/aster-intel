import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Aster Intel',
  description:
    'Read the terms and conditions for using Aster Intel services. Understand your rights and responsibilities when using our platform.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Terms() {
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

      {/* Terms of Service Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg border border-gray-200">
              {/* Header */}
              <div className="mb-8 pb-8 border-b border-gray-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6" style={{ color: '#00152E' }} />
                  </div>
                  <h1 
                    className="text-3xl md:text-4xl font-bold"
                    style={{ 
                      color: '#00152E', 
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Terms of Service
                  </h1>
                </div>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none leading-relaxed space-y-6" style={{ color: '#374151' }}>
                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the Aster Intel website and services, you accept and agree to be bound by the
                    terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                    this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>2. Use License</h2>
                  <p className="mb-3">
                    Permission is granted to temporarily access the materials on Aster Intel&apos;s website for personal,
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                    under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>3. Service Description</h2>
                  <p>
                    Aster Intel provides AI-powered decision intelligence services for MedTech investors and corporate
                    strategy teams. We reserve the right to modify, suspend, or discontinue any aspect of our services at
                    any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>4. User Accounts</h2>
                  <p className="mb-3">
                    If you create an account with us, you are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintaining the security of your account and password</li>
                    <li>All activities that occur under your account</li>
                    <li>Providing accurate and complete information</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>5. Intellectual Property</h2>
                  <p>
                    The content, features, and functionality of the Aster Intel website, including but not limited to text,
                    graphics, logos, images, and software, are the exclusive property of Aster Intel and are protected by
                    international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>6. User Content</h2>
                  <p>
                    You retain ownership of any content you submit to our services. By submitting content, you grant us a
                    worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content solely for
                    the purpose of providing our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>7. Prohibited Uses</h2>
                  <p className="mb-3">You may not use our services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>In any way that violates any applicable law or regulation</li>
                    <li>To transmit any malicious code or viruses</li>
                    <li>To impersonate or attempt to impersonate the company or any employee</li>
                    <li>To engage in any automated use of the system</li>
                    <li>To interfere with or disrupt the services or servers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>8. Disclaimer</h2>
                  <p>
                    The materials on Aster Intel&apos;s website are provided on an &apos;as is&apos; basis. Aster Intel makes no
                    warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                    without limitation, implied warranties or conditions of merchantability, fitness for a particular
                    purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>9. Limitation of Liability</h2>
                  <p>
                    In no event shall Aster Intel or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                    use or inability to use the materials on Aster Intel&apos;s website, even if Aster Intel or an authorized
                    representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>10. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless Aster Intel, its officers, directors, employees, and agents
                    from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of
                    your use of our services or violation of these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>11. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with applicable laws, without regard to
                    its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>12. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes
                    by posting the new Terms on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#00152E', fontWeight: 800, fontFamily: 'Montserrat, sans-serif' }}>13. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us at{' '}
                    <Link href="/about/contact" className="hover:underline" style={{ color: '#00152E' }}>
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
