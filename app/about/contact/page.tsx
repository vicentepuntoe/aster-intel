'use client';

import { useState } from 'react';
import { submitContact } from '@/app/actions/contact';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

    if (result.success) {
      setSubmitStatus('success');
      e.currentTarget.reset();
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  }

  return (
    <section className="pt-8 md:pt-12 pb-12 md:pb-16 min-h-[calc(100vh-200px)] flex items-center" style={{ backgroundColor: '#00152E' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch to learn how Aster Intel can transform your MedTech investment process. We&apos;re here to answer your questions and help you make faster, more informed decisions.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-teal/10 border border-teal/20 rounded-lg p-4 mb-6 text-center">
              <p className="text-teal font-medium">Message Sent</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-center">
              <p className="text-red-300 font-medium">
                Failed to send message. Please try again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#00152E' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  style={{ color: '#374151' }}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#00152E' }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  style={{ color: '#374151' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="role" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#00152E' }}
                >
                  Role/Title
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  style={{ color: '#374151' }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#00152E' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  style={{ color: '#374151' }}
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#00152E' }}
                >
                  Message <span style={{ color: '#6B7280' }}>(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white resize-none"
                  style={{ color: '#374151' }}
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-lg font-semibold text-white transition-all shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShiftSlow 6s ease infinite, gradientGlowSubtle 4s ease-in-out infinite',
                  }}
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
