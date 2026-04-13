import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Target, Palette, ArrowRight, CheckCircle } from 'lucide-react';

export default function BrandingService() {
  useEffect(() => {
    document.title = 'Professional Branding Services | AZFEXA - Build Your Brand Identity';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create a distinctive brand identity with AZFEXA. Expert branding services including logo design, brand strategy, and visual identity systems for startups and businesses.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full">
                <span className="text-accent font-semibold text-sm">Branding Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Create a Distinctive <span className="text-accent">Brand Identity</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your vision into a compelling brand that resonates with your audience. From logo design to complete brand systems, we craft identities that stand out.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/branding-service-iVGhnYBQCvxSSxsm892Fge.webp" 
                alt="Professional branding design process"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">What We Offer</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive branding solutions tailored to your business needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Logo & Visual Design',
                description: 'Custom logo design and visual identity systems that represent your brand essence'
              },
              {
                icon: Target,
                title: 'Brand Strategy',
                description: 'Strategic brand positioning, messaging, and market differentiation'
              },
              {
                icon: Sparkles,
                title: 'Brand Guidelines',
                description: 'Comprehensive brand guidelines ensuring consistency across all touchpoints'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Branding Process</h2>
          
          <div className="space-y-8">
            {[
              { num: '01', title: 'Discovery', desc: 'We understand your business, values, and target audience' },
              { num: '02', title: 'Strategy', desc: 'Develop a comprehensive brand strategy and positioning' },
              { num: '03', title: 'Design', desc: 'Create compelling visual designs and brand elements' },
              { num: '04', title: 'Refinement', desc: 'Iterate and perfect based on your feedback' },
              { num: '05', title: 'Guidelines', desc: 'Deliver complete brand guidelines and assets' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="text-4xl font-bold text-accent min-w-20">{step.num}</div>
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
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose AZFEXA for Branding</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Experienced brand strategists and designers',
              'Custom solutions tailored to your industry',
              'Proven track record with startups and SMBs',
              'Comprehensive brand guidelines included',
              'Unlimited revisions until you\'re satisfied',
              'Ongoing brand support and consultation'
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Brand?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create a brand identity that captures your essence and resonates with your audience.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
