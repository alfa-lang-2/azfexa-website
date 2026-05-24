import { BlogArticle } from './blog-data';

export function addArticleSchema(article: BlogArticle) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AZFEXA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/WhatsApp_Image_2026-04-07_at_1.42.45_PM-removebg-preview_96a83d79.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://azfexa.com/blog/${article.slug}`,
    },
    keywords: article.tags.join(', '),
    articleBody: article.content,
  };

  // Remove existing schema if present
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function addBlogListingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AZFEXA Blog',
    description: 'Read AZFEXA blog articles on branding, social media, digital marketing, and content creation strategies.',
    url: 'https://azfexa.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'AZFEXA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/WhatsApp_Image_2026-04-07_at_1.42.45_PM-removebg-preview_96a83d79.png',
      },
    },
  };

  // Remove existing schema if present
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function addOrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AZFEXA',
    url: 'https://azfexa.com',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/WhatsApp_Image_2026-04-07_at_1.42.45_PM-removebg-preview_96a83d79.png',
    description: 'AZFEXA - A to Z Creative & Digital Solutions. Full-service digital agency offering branding, social media, website development, content creation, digital marketing, and influencer marketing.',
    sameAs: [
      'https://www.facebook.com/azfexa',
      'https://www.twitter.com/azfexa',
      'https://www.instagram.com/azfexa',
      'https://www.linkedin.com/company/azfexa',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@azfexa.com',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Branding',
      'Social Media Marketing',
      'Web Development',
      'Content Creation',
      'Digital Marketing',
      'Influencer Marketing',
      'PR',
    ],
  };

  // Add schema to head
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
