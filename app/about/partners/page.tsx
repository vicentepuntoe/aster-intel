'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Partners() {
  const partners = [
    {
      name: 'Sanjay Mazumder',
      description:
        'With 27+ years of expertise, I specialize in innovating, architecting, and commercializing cutting-edge software for digital transformation. Proven track record in building high-performance teams and driving growth across startups, enterprises, and system integrators.',
      linkedin: 'https://www.linkedin.com/in/sanjaymazumder/',
      image: '/Sanjay-Mazumder-1024x1024.webp',
    },
    {
      name: 'Subroto Mukherjee',
      description:
        'Global leader in Digital Transformation, AI, and Automation with 20+ years of driving innovation and global impact. Recognized for thought leadership, engineering excellence, and multiple industry awards.',
      linkedin: 'https://www.linkedin.com/in/subroto-mukherjee/',
      image: '/Subroto-Mukherjee-1024x1024.webp',
    },
  ];

  return (
    <section className="pt-20 md:pt-28 pb-0" style={{ backgroundColor: '#00152E' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investors & Partners
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ 
                    color: '#00152E', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {partner.name}
                </h3>
                <p 
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: '#374151' }}
                >
                  {partner.description}
                </p>
                <Link
                  href={partner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ color: '#00152E' }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: '#00152E' }} />
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Advisors Section */}
          <div className="mt-16 pb-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advisors</h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg max-w-md w-full">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src="/Stuart-Kippelman-1-1024x1024.webp"
                      alt="Stuart Kippelman"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ 
                    color: '#00152E', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Stuart Kippelman
                </h3>
                <p 
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: '#374151' }}
                >
                  Passionate about technology&apos;s power to reshape the world, I create solutions that boost productivity, enhance health and safety, educate, and entertain—driving meaningful impact in our lives.
                </p>
                <Link
                  href="https://www.linkedin.com/in/kippelman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ color: '#00152E' }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: '#00152E' }} />
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
