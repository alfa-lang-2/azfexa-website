import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Megaphone, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export default function InfluencerMarketingService() {
  useEffect(() => {
    document.title = 'Influencer Marketing & PR Services | AZFEXA - Build Authority';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional influencer marketing and PR services from AZFEXA. Connect with influencers, manage brand partnerships, and build authority in your industry.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-pink-900 via-pink-800 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-pink-400/20 rounded-full">
                <span className="text-pink-300 font-semibold text-sm">Influencer & PR</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build <span className="text-pink-300">Brand Authority</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect with influencers and media to amplify your brand message. Strategic partnerships that build credibility and reach.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white font-semibold">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/influencer-marketing-service-4uvt2ciFG6FumNsqo2NTVk.webp" 
                alt="Influencer marketing and PR strategy"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Influencer & PR Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Strategic partnerships and media relations to amplify your brand
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Influencer Partnerships',
                description: 'Connect with relevant influencers and manage collaborations that reach your target audience'
              },
              {
                icon: Megaphone,
                title: 'PR & Media Relations',
                description: 'Build relationships with journalists and media outlets for press coverage and brand mentions'
              },
              {
                icon: Sparkles,
                title: 'Brand Advocacy',
                description: 'Develop ambassador programs and community advocates who promote your brand authentically'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-lg bg-pink-100 flex items-center justify-center mb-6">
                    <Icon className="text-pink-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Influencer Categories */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Influencer Categories We Work With</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Macro Influencers', 'Micro Influencers', 'Nano Influencers', 'Industry Experts', 'Content Creators', 'Brand Ambassadors', 'Thought Leaders', 'Community Advocates'].map((category, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold text-gray-900">{category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Influencer & PR Process</h2>
          
          <div className="space-y-8">
            {[
              { num: '01', title: 'Strategy Development', desc: 'Identify target influencers and media outlets aligned with your brand' },
              { num: '02', title: 'Outreach & Negotiation', desc: 'Build relationships and negotiate partnerships and media placements' },
              { num: '03', title: 'Campaign Management', desc: 'Manage collaborations and ensure brand guidelines are followed' },
              { num: '04', title: 'Content Amplification', desc: 'Amplify influencer content and manage brand mentions' },
              { num: '05', title: 'Performance Tracking', desc: 'Track metrics and measure ROI of influencer partnerships' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="text-4xl font-bold text-pink-600 min-w-20">{step.num}</div>
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
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose AZFEXA for Influencer & PR</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Established relationships with influencers and media',
              'Strategic influencer matching and vetting',
              'Authentic partnership development',
              'Media coverage and press placement',
              'Performance tracking and ROI measurement',
              'Crisis management and reputation support'
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="text-pink-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Results & Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '500+', label: 'Influencer Connections' },
              { metric: '2M+', label: 'Combined Reach' },
              { metric: '85%', label: 'Engagement Rate' },
              { metric: '150+', label: 'Media Placements' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">{item.metric}</div>
                <p className="text-gray-700">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-pink-900 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Brand Authority?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's develop an influencer and PR strategy that amplifies your brand message.
          </p>
          <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white font-semibold">
            Start Your Influencer Strategy
          </Button>
        </div>
      </section>
    </div>
  );
}
