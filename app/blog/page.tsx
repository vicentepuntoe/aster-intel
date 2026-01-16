import Link from 'next/link';
import type { Metadata } from 'next';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Blog | Aster Intel',
  description:
    'Insights, analysis, and perspectives on MedTech investment intelligence and AI-powered decision-making.',
  openGraph: {
    title: 'Blog | Aster Intel',
    description:
      'Insights, analysis, and perspectives on MedTech investment intelligence and AI-powered decision-making.',
  },
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold mb-8 md:mb-10"
              style={{
                fontWeight: 800,
                letterSpacing: '-1.92px',
                lineHeight: '1.1',
                backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                paddingBottom: '0.2em',
              }}
            >
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 md:mb-14 max-w-3xl mx-auto leading-relaxed">
              Insights, analysis, and perspectives on MedTech investment intelligence and AI-powered
              decision-making
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg" style={{ color: '#374151' }}>No blog posts available yet.</p>
                <p className="mt-2" style={{ color: '#6B7280' }}>Check back soon for new content!</p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <AnimatedSection key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200 transition-all hover:scale-[1.02] hover:shadow-lg group"
                    >
                      <h2 
                        className="text-2xl md:text-3xl font-bold mb-4 transition-colors"
                        style={{ 
                          color: '#00152E', 
                          fontWeight: 800,
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        {post.title}
                      </h2>
                      <p 
                        className="text-lg mb-6 leading-relaxed"
                        style={{ color: '#374151' }}
                      >
                        {post.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-6 text-sm" style={{ color: '#6B7280' }}>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" style={{ color: '#00152E' }} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color: '#00152E' }} />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        {post.readingTime && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" style={{ color: '#00152E' }} />
                            <span>{post.readingTime}</span>
                          </div>
                        )}
                      </div>
                      <div 
                        className="mt-6 flex items-center font-semibold group-hover:gap-3 transition-all"
                        style={{ color: '#00152E' }}
                      >
                        Read more
                        <ArrowRight className="w-5 h-5 ml-2" style={{ color: '#00152E' }} />
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
