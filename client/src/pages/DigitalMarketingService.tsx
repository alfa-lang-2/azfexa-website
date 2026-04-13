import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BarChart3, Target, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function DigitalMarketingService() {
  useEffect(() => {
    document.title = 'Digital Marketing Services | AZFEXA - Drive Growth';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive digital marketing services from AZFEXA. SEO, PPC, email marketing, and data analytics to drive qualified traffic and conversions.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-green-400/20 rounded-full">
                <span className="text-green-300 font-semibold text-sm">Digital Marketing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Drive <span className="text-green-300">Qualified Traffic</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Data-driven digital marketing strategies that increase visibility, attract customers, and drive measurable results.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-green-400 hover:bg-green-500 text-white font-semibold">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/digital-marketing-service-Sf2WXjkNFZEgJzScDnWt2u.webp" 
                alt="Digital marketing analytics and strategy"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Digital Marketing Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive strategies to grow your online presence
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'SEO & SEM',
                description: 'Search engine optimization and paid search campaigns to increase visibility and drive traffic'
              },
              {
                icon: Target,
                title: 'Email Marketing',
                description: 'Targeted email campaigns that nurture leads and drive customer retention'
              },
              {
                icon: Zap,
                title: 'Analytics & Reporting',
                description: 'Comprehensive analytics and monthly reports tracking ROI and performance metrics'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                    <Icon className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Marketing Channels We Manage</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Email Marketing', 'SEO', 'Content Marketing', 'Retargeting', 'Affiliate Marketing'].map((channel, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold text-gray-900">{channel}</p>
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
                { metric: '+250%', label: 'Average Traffic Increase' },
                { metric: '+180%', label: 'Lead Generation Boost' },
                { metric: '+45%', label: 'Conversion Rate Improvement' },
                { metric: '3.2x', label: 'Average ROI' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-3xl font-bold text-green-600 min-w-32">{item.metric}</div>
                  <div>
                    <p className="text-lg text-gray-700">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Why Partner With Us</h3>
              <ul className="space-y-4">
                {[
                  'Certified digital marketing experts',
                  'Data-driven strategy and optimization',
                  'Transparent reporting and communication',
                  'Continuous testing and improvement',
                  'Dedicated account management',
                  'Flexible, scalable budgets'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's develop a digital marketing strategy that drives real growth for your business.
          </p>
          <Button size="lg" className="bg-green-400 hover:bg-green-500 text-white font-semibold">
            Start Your Marketing Strategy
          </Button>
        </div>
      </section>
    </div>
  );
}
