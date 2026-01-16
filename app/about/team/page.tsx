'use client';

import { Linkedin, User } from 'lucide-react';

export default function Team() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#00152E' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built by operators, investors, and technologists
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center transition-all hover:scale-105 hover:shadow-lg cursor-default"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10" style={{ color: '#00152E' }} />
                </div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ 
                    color: '#00152E', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Team Member
                </h3>
                <p 
                  className="text-sm mb-3"
                  style={{ color: '#6B7280' }}
                >
                  Role Title
                </p>
                <p 
                  className="text-xs mb-4"
                  style={{ color: '#374151' }}
                >
                  Background description placeholder text here
                </p>
                <div className="flex justify-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Linkedin className="w-4 h-4" style={{ color: '#00152E' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
