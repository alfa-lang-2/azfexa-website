import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function SocialMediaService() {
  useEffect(() => {
    document.title = 'Social Media Marketing Services | AZFEXA - Grow Your Audience';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Manage your social media presence with AZFEXA. Expert social media marketing, content strategy, and community management for Instagram, Facebook, TikTok, and LinkedIn.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-400/20 rounded-full">
                <span className="text-cyan-300 font-semibold text-sm">Social Media Marketing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Grow Your <span className="text-cyan-300">Social Presence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build engaged communities and drive meaningful conversations. We manage your social media across all platforms with data-driven strategies.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/social-media-service-86aLJTtbGmg5kBk4k3Njf3.webp" 
                alt="Social media analytics and management dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Social Media Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive social media solutions across all major platforms
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Content Strategy',
                description: 'Develop engaging content calendars and posting strategies tailored to your audience'
              },
              {
                icon: Users,
                title: 'Community Management',
                description: 'Build and nurture engaged communities through active engagement and responses'
              },
              {
                icon: Zap,
                title: 'Paid Advertising',
                description: 'Run targeted ad campaigns to reach your ideal customers and drive conversions'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Platforms We Manage</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Twitter/X', 'YouTube', 'Pinterest', 'Threads'].map((platform, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900">{platform}</h3>
                <p className="text-gray-600 mt-2">Expert management & growth</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Results You Can Expect</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { metric: '+150%', label: 'Average Follower Growth' },
                { metric: '+320%', label: 'Engagement Rate Increase' },
                { metric: '+85%', label: 'Conversion Rate Improvement' },
                { metric: '24/7', label: 'Community Support' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-3xl font-bold text-blue-600 min-w-32">{item.metric}</div>
                  <div>
                    <p className="text-lg text-gray-700">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Why Partner With Us</h3>
              <ul className="space-y-4">
                {[
                  'Dedicated social media experts',
                  'Data-driven strategy and optimization',
                  'Consistent, high-quality content',
                  'Real-time community engagement',
                  'Monthly performance reports',
                  'Flexible, scalable solutions'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Social Media?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's build a social media strategy that drives real results for your business.
          </p>
          <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold">
            Start Your Social Media Growth
          </Button>
        </div>
      </section>
    </div>
  );
}
