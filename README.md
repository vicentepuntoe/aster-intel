# Aster Intel Website

Modern, minimal, enterprise-grade marketing website built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: Resend
- **Deployment**: Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /page.tsx          # Homepage
  /about
    /page.tsx        # About page (Partners, Team, Contact)
/components          # Reusable components
/public
  /brand             # Logo and brand assets
```

## Environment Variables

- `RESEND_API_KEY`: Required for contact form functionality

## Deployment

The site is configured for Vercel deployment. Connect your GitHub repository to Vercel for automatic deployments.
