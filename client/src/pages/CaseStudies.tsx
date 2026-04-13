import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  useEffect(() => {
    document.title = 'Case Studies | AZFEXA - Client Success Stories';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore AZFEXA case studies showcasing real client success stories, measurable results, and business transformations through our digital marketing and branding services.');
    }
  }, []);

  const caseStudies = [
    {
      title: 'E-Commerce Startup - 200% Revenue Growth',
      client: 'Fashion Boutique Brand',
      challenge: 'New e-commerce startup struggling with brand visibility and online sales',
      solution: 'Comprehensive branding, website development, and digital marketing strategy',
      results: [
        { metric: '+200%', label: 'Revenue Growth' },
        { metric: '+75%', label: 'Website Traffic' },
        { metric: '+120%', label: 'Online Sales' },
        { metric: '3.5x', label: 'ROI' }
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/case-study-hero-G8v5hy7UYvLbXeauAtVgbf.webp'
    },
    {
      title: 'SaaS Company - Lead Generation Boost',
      client: 'B2B Software Company',
      challenge: 'Difficulty generating qualified leads and establishing thought leadership',
      solution: 'Content marketing, SEO optimization, and influencer partnerships',
      results: [
        { metric: '+180%', label: 'Lead Generation' },
        { metric: '+250%', label: 'Organic Traffic' },
        { metric: '+45%', label: 'Conversion Rate' },
        { metric: '2.8x', label: 'ROI' }
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/case-study-hero-G8v5hy7UYvLbXeauAtVgbf.webp'
    },
    {
      title: 'Personal Brand - Influencer Success',
      client: 'Fitness & Wellness Influencer',
      challenge: 'Building personal brand and monetizing social media presence',
      solution: 'Brand strategy, social media management, and influencer partnerships',
      results: [
        { metric: '+500K', label: 'Followers' },
        { metric: '+320%', label: 'Engagement' },
        { metric: '+85%', label: 'Brand Deals' },
        { metric: '4.2x', label: 'Income Growth' }
      ],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/case-study-hero-G8v5hy7UYvLbXeauAtVgbf.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Success Stories</h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real results from real clients across industries
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full">
                    <span className="text-accent font-semibold text-sm">Case Study</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4">{study.title}</h2>
                  <p className="text-gray-600 mb-6 font-semibold">{study.client}</p>
                  
                  <div className="mb-8 space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.results.map((result, ridx) => (
                      <div key={ridx} className="bg-slate-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-accent">{result.metric}</div>
                        <p className="text-sm text-gray-700">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-accent hover:bg-accent/90">
                    Learn More <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Track Record</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '500+', label: 'Projects Completed' },
              { metric: '300+', label: 'Happy Clients' },
              { metric: '2.5x', label: 'Average ROI' },
              { metric: '98%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <Card key={idx} className="p-8 text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.metric}</div>
                <p className="text-gray-700">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AZFEXA can help your business achieve similar results.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
