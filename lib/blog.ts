// Blog posts data
// TODO: Replace with MDX file reading when blog content is added

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readingTime?: string;
  content?: string;
}

// Placeholder blog posts
const blogPosts: BlogPost[] = [
  {
    slug: 'ai-powered-medtech-investment-analysis',
    title: 'AI-Powered MedTech Investment Analysis: The Future of Due Diligence',
    summary:
      'How artificial intelligence is transforming the way investors evaluate MedTech opportunities and make faster, more informed decisions.',
    author: 'Aster Intel Team',
    date: '2024-01-15',
    readingTime: '5 min read',
    content: `# AI-Powered MedTech Investment Analysis

The MedTech investment landscape is rapidly evolving, and traditional due diligence methods are struggling to keep pace with the volume and complexity of information available today.

## The Challenge

MedTech investments require deep analysis across multiple dimensions:
- Scientific and clinical data
- Regulatory landscapes
- Market dynamics
- Competitive positioning
- Financial projections

Traditional research methods often take weeks or months to compile comprehensive analysis, delaying critical investment decisions.

## The Solution

AI-powered analysis platforms like Aster Intel are revolutionizing how investors approach MedTech due diligence. By leveraging state-of-the-art AI models, we can:

1. **Accelerate Research**: Process thousands of documents in minutes instead of weeks
2. **Identify Patterns**: Discover insights that might be missed in manual review
3. **Maintain Accuracy**: Combine AI analysis with expert human insight

## Looking Forward

As AI technology continues to advance, we expect to see even more sophisticated analysis capabilities that will further streamline the investment process while maintaining the rigor and depth required for confident decision-making.`,
  },
  {
    slug: 'experiential-learning-investment-intelligence',
    title: 'Experiential Learning in Investment Intelligence: Building Institutional Knowledge',
    summary:
      'How experiential learning systems capture and apply insights from past investments to improve future decision-making processes.',
    author: 'Aster Intel Team',
    date: '2024-01-10',
    readingTime: '4 min read',
    content: `# Experiential Learning in Investment Intelligence

One of the most valuable assets in investment decision-making is institutional knowledge—the accumulated insights from past investments, successes, and failures.

## The Power of Institutional Knowledge

Every investment decision provides valuable data points:
- What worked and what didn't
- Market patterns and trends
- Regulatory considerations
- Strategic positioning insights

Traditional approaches often struggle to capture and leverage this knowledge effectively.

## How Experiential Learning Works

Our platform uses experiential learning to:
- Capture insights from each investment analysis
- Identify patterns across multiple deals
- Apply learnings to new opportunities
- Continuously improve analysis quality

## Benefits

By building on past experience, investors can:
- Make more informed decisions faster
- Avoid repeating past mistakes
- Identify opportunities that align with proven strategies
- Build a competitive advantage through accumulated knowledge

The future of investment intelligence lies in systems that learn and improve with every decision.`,
  },
  {
    slug: 'experts-in-the-loop-ai-investment-analysis',
    title: 'Experts in the Loop: Combining AI and Human Insight for Better Investment Decisions',
    summary:
      'Why the best investment analysis combines the speed and scale of AI with the strategic context and judgment of human experts.',
    author: 'Aster Intel Team',
    date: '2024-01-05',
    readingTime: '6 min read',
    content: `# Experts in the Loop: Combining AI and Human Insight

The debate between fully automated AI systems and traditional human analysis misses a crucial point: the best results come from combining both.

## The AI Advantage

AI brings powerful capabilities:
- **Scale**: Process vast amounts of data quickly
- **Consistency**: Apply analysis frameworks uniformly
- **Pattern Recognition**: Identify trends humans might miss
- **Speed**: Deliver insights in hours instead of weeks

## The Human Advantage

Human experts provide:
- **Strategic Context**: Understand business and market nuances
- **Judgment**: Make calls when data is ambiguous
- **Experience**: Apply lessons from years in the industry
- **Creativity**: Think beyond patterns to see opportunities

## The Best of Both Worlds

Our "experts in the loop" approach:
1. Uses AI to handle data-intensive analysis
2. Provides human experts with AI-generated insights
3. Allows experts to add context, judgment, and strategic thinking
4. Continuously improves AI models based on expert feedback

## Results

This hybrid approach delivers:
- Faster analysis without sacrificing depth
- More accurate insights through expert validation
- Better strategic recommendations
- Continuous improvement through feedback loops

The future of investment analysis isn't AI replacing humans—it's AI and humans working together to make better decisions.`,
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  // Return posts sorted by date (newest first)
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((post) => post.slug === slug) || null;
}
