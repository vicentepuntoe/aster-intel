import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Aster Intel Blog',
    };
  }

  return {
    title: `${post.title} | Aster Intel Blog`,
    description: post.summary,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-like content rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 leading-relaxed" style={{ color: '#374151' }}>
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h2 
            key={`h2-${index}`} 
            className="text-3xl font-bold mt-8 mb-4"
            style={{ 
              color: '#00152E', 
              fontWeight: 800,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {line.substring(2)}
          </h2>
        );
      } else if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 leading-relaxed" style={{ color: '#374151' }}>
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h3 
            key={`h3-${index}`} 
            className="text-2xl font-semibold mt-6 mb-3"
            style={{ 
              color: '#00152E', 
              fontWeight: 800,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {line.substring(3)}
          </h3>
        );
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!inList) {
          if (currentParagraph.length > 0) {
            elements.push(
              <p key={`p-${index}`} className="mb-4 leading-relaxed" style={{ color: '#374151' }}>
                {currentParagraph.join(' ')}
              </p>
            );
            currentParagraph = [];
          }
          inList = true;
        }
        listItems.push(line.substring(2));
      } else if (line.trim() === '') {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc list-inside mb-4 space-y-2" style={{ color: '#374151' }}>
              {listItems.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 leading-relaxed" style={{ color: '#374151' }}>
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
      } else {
        if (inList) {
          if (listItems.length > 0) {
            elements.push(
              <ul key={`ul-${index}`} className="list-disc list-inside mb-4 space-y-2" style={{ color: '#374151' }}>
                {listItems.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
            listItems = [];
          }
          inList = false;
        }
        currentParagraph.push(line.trim());
      }
    });

    // Handle remaining content
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="ul-final" className="list-disc list-inside mb-4 space-y-2" style={{ color: '#374151' }}>
          {listItems.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    if (currentParagraph.length > 0) {
      elements.push(
        <p key="p-final" className="mb-4 leading-relaxed" style={{ color: '#374151' }}>
          {currentParagraph.join(' ')}
        </p>
      );
    }

    return elements;
  };

  return (
    <>
      {/* Back to Blog Link */}
      <section className="pt-8 pb-4" style={{ backgroundColor: '#00152E' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <article className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg border border-gray-200">
              {/* Post Header */}
              <header className="mb-8 pb-8 border-b border-gray-300">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  style={{ 
                    color: '#00152E', 
                    fontWeight: 800,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {post.title}
                </h1>
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
              </header>

              {/* Post Content */}
              <div className="prose prose-lg max-w-none">
                {post.content ? (
                  <div className="leading-relaxed" style={{ color: '#374151' }}>{renderContent(post.content)}</div>
                ) : (
                  <p style={{ color: '#374151' }}>{post.summary}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
