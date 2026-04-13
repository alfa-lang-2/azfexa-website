/**
 * SEO Metadata Helper for AZFEXA Website
 * Manages meta tags, Open Graph, and structured data
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
}

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: 'AZFEXA | Full-Service Digital Agency - A-to-Z Brand Building Solutions',
    description: 'AZFEXA is a full-service digital agency offering A-to-Z brand-building solutions. From branding to digital marketing, we help startups and SMBs grow.',
    keywords: 'digital agency, branding, social media marketing, web development, content creation, digital marketing',
    ogTitle: 'AZFEXA - Your A-to-Z Digital Partner',
    ogDescription: 'Transform your brand with comprehensive digital solutions from AZFEXA',
  },
  branding: {
    title: 'Professional Branding Services | AZFEXA - Build Your Brand Identity',
    description: 'Create a distinctive brand identity with AZFEXA. Expert branding services including logo design, brand strategy, and visual identity systems.',
    keywords: 'branding services, logo design, brand identity, brand strategy, visual design',
  },
  socialMedia: {
    title: 'Social Media Marketing Services | AZFEXA - Grow Your Audience',
    description: 'Manage your social media presence with AZFEXA. Expert social media marketing, content strategy, and community management.',
    keywords: 'social media marketing, social media management, Instagram marketing, Facebook marketing, TikTok marketing',
  },
  webDevelopment: {
    title: 'Web Development Services | AZFEXA - Build Your Online Presence',
    description: 'Professional web development services from AZFEXA. Responsive websites, e-commerce solutions, and web applications.',
    keywords: 'web development, website design, e-commerce, responsive design, web applications',
  },
  contentCreation: {
    title: 'Content Creation Services | AZFEXA - Engage Your Audience',
    description: 'Professional content creation services from AZFEXA. Blog writing, video production, and multimedia content.',
    keywords: 'content creation, blog writing, video production, content marketing, multimedia',
  },
  digitalMarketing: {
    title: 'Digital Marketing Services | AZFEXA - Drive Growth',
    description: 'Comprehensive digital marketing services from AZFEXA. SEO, PPC, email marketing, and data analytics.',
    keywords: 'digital marketing, SEO, SEM, PPC, email marketing, marketing analytics',
  },
  influencerMarketing: {
    title: 'Influencer Marketing & PR Services | AZFEXA - Build Authority',
    description: 'Professional influencer marketing and PR services from AZFEXA. Connect with influencers and build brand authority.',
    keywords: 'influencer marketing, PR services, brand partnerships, media relations, influencer outreach',
  },
  about: {
    title: 'About AZFEXA | Full-Service Digital Agency',
    description: 'Learn about AZFEXA, a full-service digital agency offering A-to-Z brand-building solutions for startups and SMBs.',
    keywords: 'about AZFEXA, digital agency, company mission, team',
  },
  caseStudies: {
    title: 'Case Studies | AZFEXA - Client Success Stories',
    description: 'Explore AZFEXA case studies showcasing real client success stories and measurable results.',
    keywords: 'case studies, client success, portfolio, results, testimonials',
  },
  faq: {
    title: 'FAQ | AZFEXA - Frequently Asked Questions',
    description: 'Find answers to common questions about AZFEXA services, pricing, process, and how we help businesses grow.',
    keywords: 'FAQ, frequently asked questions, pricing, services, process',
  }
};

export function updateSEOMetadata(metadata: SEOMetadata) {
  // Update title
  document.title = metadata.title;

  // Update or create meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', metadata.description);

  // Update or create keywords
  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (!keywordsMeta) {
    keywordsMeta = document.createElement('meta');
    keywordsMeta.setAttribute('name', 'keywords');
    document.head.appendChild(keywordsMeta);
  }
  keywordsMeta.setAttribute('content', metadata.keywords);

  // Update Open Graph tags
  if (metadata.ogTitle) {
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', metadata.ogTitle);
  }

  if (metadata.ogDescription) {
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', metadata.ogDescription);
  }

  // Update canonical URL
  if (metadata.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', metadata.canonical);
  }
}

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'AZFEXA',
    'url': 'https://azfexa.com',
    'logo': 'https://azfexa.com/logo.png',
    'description': 'Full-service digital agency offering A-to-Z brand-building solutions',
    'sameAs': [
      'https://www.facebook.com/azfexa',
      'https://www.instagram.com/azfexa',
      'https://www.linkedin.com/company/azfexa',
      'https://twitter.com/azfexa'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'email': 'hello@azfexa.com'
    }
  },
  service: (serviceName: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': description,
    'provider': {
      '@type': 'Organization',
      'name': 'AZFEXA'
    }
  }),
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'AZFEXA',
    'image': 'https://azfexa.com/logo.png',
    'description': 'Full-service digital agency',
    'priceRange': '$$',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '150'
    }
  }
};

export function addStructuredData(data: any) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
