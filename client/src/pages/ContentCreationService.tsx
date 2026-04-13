import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PenTool, Video, Mic, ArrowRight, CheckCircle } from 'lucide-react';

export default function ContentCreationService() {
  useEffect(() => {
    document.title = 'Content Creation Services | AZFEXA - Engage Your Audience';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional content creation services from AZFEXA. Blog writing, video production, and multimedia content that engages your audience and drives results.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-orange-400/20 rounded-full">
                <span className="text-orange-300 font-semibold text-sm">Content Creation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Engage Your <span className="text-orange-300">Audience</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                High-quality content that tells your brand story and connects with your audience. From blog posts to videos, we create content that converts.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-white font-semibold">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/content-creation-service-4FLxUgXndwoRLBSCE38WxK.webp" 
                alt="Professional content creation studio"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Content Services We Offer</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive content solutions for all your marketing needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: 'Blog & Written Content',
                description: 'SEO-optimized blog posts, articles, and copywriting that drives traffic and engagement'
              },
              {
                icon: Video,
                title: 'Video Production',
                description: 'Professional video content from concept to final edit, including product videos and testimonials'
              },
              {
                icon: Mic,
                title: 'Podcast & Audio',
                description: 'Podcast production, audio editing, and voice-over services for multimedia content'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
                    <Icon className="text-orange-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Types of Content We Create</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Blog Posts', 'Videos', 'Infographics', 'Social Posts', 'Whitepapers', 'Case Studies', 'Podcasts', 'Webinars'].map((type, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold text-gray-900">{type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Content Creation Process</h2>
          
          <div className="space-y-8">
            {[
              { num: '01', title: 'Strategy', desc: 'Develop a content strategy aligned with your business goals' },
              { num: '02', title: 'Research', desc: 'In-depth research and audience analysis' },
              { num: '03', title: 'Creation', desc: 'Professional content creation by expert writers and producers' },
              { num: '04', title: 'Optimization', desc: 'SEO optimization and performance enhancement' },
              { num: '05', title: 'Distribution', desc: 'Strategic distribution across all channels' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="text-4xl font-bold text-orange-600 min-w-20">{step.num}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose AZFEXA for Content</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Professional writers and content creators',
              'SEO-optimized content for better rankings',
              'Consistent brand voice and messaging',
              'Multi-format content creation',
              'Data-driven content strategy',
              'Regular performance analytics'
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-900 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Engaging Content?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's develop a content strategy that resonates with your audience and drives results.
          </p>
          <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-white font-semibold">
            Start Your Content Strategy
          </Button>
        </div>
      </section>
    </div>
  );
}
