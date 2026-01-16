import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t border-white/10"
      style={{ backgroundColor: '#00152E' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/aster.svg"
                alt="Aster Intel"
                width={300}
                height={100}
                className="h-[90px] md:h-[110px] w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm md:text-base max-w-lg leading-relaxed mb-4">
              We bring together purpose-driven AI strategies, value-added tools, and a commitment to
              workflow optimization and efficiency.
            </p>
            <p className="text-gray-400 text-sm mt-12 md:mt-16">
              {currentYear}© Aster Intel. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/platform"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Platform
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Use Cases
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Team
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about/contact"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-300 hover:text-accent transition-colors text-sm relative group inline-block pb-1"
                >
                  Security & Trust
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
