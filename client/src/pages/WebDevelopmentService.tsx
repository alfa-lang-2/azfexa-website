import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Smartphone, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function WebDevelopmentService() {
  useEffect(() => {
    document.title = 'Web Development Services | AZFEXA - Build Your Online Presence';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web development services from AZFEXA. Responsive websites, e-commerce solutions, and web applications built with modern technology for optimal performance.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-purple-400/20 rounded-full">
                <span className="text-purple-300 font-semibold text-sm">Web Development</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build Your <span className="text-purple-300">Online Presence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Custom websites and web applications built with cutting-edge technology. Fast, secure, and designed for conversions.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-purple-400 hover:bg-purple-500 text-white font-semibold">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663525676510/mzuJNDxtmXyit3vN2ZJcWV/web-development-service-LDtMd27Z96HhUGLGQabYTM.webp" 
                alt="Professional web development and coding"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Web Development Solutions</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            From simple websites to complex web applications
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Custom Web Development',
                description: 'Bespoke websites and applications built from scratch with your specific requirements'
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Mobile-first design that works perfectly on all devices and screen sizes'
              },
              {
                icon: Zap,
                title: 'Performance Optimization',
                description: 'Lightning-fast loading times and optimized performance for better user experience'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                    <Icon className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Technologies We Use</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((tech, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold text-gray-900">{tech}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Development Process</h2>
          
          <div className="space-y-8">
            {[
              { num: '01', title: 'Discovery & Planning', desc: 'Understand your goals, requirements, and target audience' },
              { num: '02', title: 'Design & Wireframes', desc: 'Create detailed wireframes and design mockups' },
              { num: '03', title: 'Development', desc: 'Build your website with clean, maintainable code' },
              { num: '04', title: 'Testing & QA', desc: 'Comprehensive testing across browsers and devices' },
              { num: '05', title: 'Deployment & Support', desc: 'Launch your website and provide ongoing support' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="text-4xl font-bold text-purple-600 min-w-20">{step.num}</div>
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
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose AZFEXA</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Expert developers with years of experience',
              'SEO-optimized, fast-loading websites',
              'Mobile-responsive design as standard',
              'Security and data protection built-in',
              'Ongoing maintenance and support',
              'Transparent communication throughout'
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create a website that drives results for your business.
          </p>
          <Button size="lg" className="bg-purple-400 hover:bg-purple-500 text-white font-semibold">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
