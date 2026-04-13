import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Target, Lightbulb, Users, Award, ArrowRight } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'About AZFEXA | Full-Service Digital Agency';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about AZFEXA, a full-service digital agency offering A-to-Z brand-building solutions for startups, SMBs, and personal brands. Our mission, values, and team.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About AZFEXA</h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your A-to-Z partner in building extraordinary brands and digital solutions
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                AZFEXA was founded with a simple mission: to make world-class digital marketing and branding accessible to businesses of all sizes. We recognized that startups and SMBs often struggle to find comprehensive, integrated solutions that cover every aspect of brand building.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                That's why we created AZFEXA—an A-to-Z platform where businesses can access all the services they need, from branding to digital marketing, all in one place. Our team of experts works collaboratively to ensure every project receives the attention and expertise it deserves.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, AZFEXA partners with hundreds of businesses to transform their brands and achieve measurable growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-orange-500/10 p-12 rounded-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">500+</h3>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">300+</h3>
                  <p className="text-gray-700">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">50+</h3>
                  <p className="text-gray-700">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Mission & Values</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <Target className="text-accent mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with comprehensive, integrated digital solutions that drive growth, build authentic brands, and create lasting customer relationships. We believe every business deserves access to world-class expertise.
              </p>
            </Card>

            <div className="space-y-6">
              {[
                { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of trends and embrace new technologies' },
                { icon: Users, title: 'Collaboration', desc: 'We work closely with our clients as true partners' },
                { icon: Award, title: 'Excellence', desc: 'We deliver exceptional results on every project' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose AZFEXA</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'A-to-Z Solutions',
                description: 'All services under one roof—no need to juggle multiple vendors'
              },
              {
                title: 'Expert Team',
                description: 'Specialists in every field working collaboratively for your success'
              },
              {
                title: 'Proven Results',
                description: 'Track record of delivering measurable growth and ROI'
              },
              {
                title: 'Client-Focused',
                description: 'Your goals are our goals—we succeed when you succeed'
              },
              {
                title: 'Transparent Communication',
                description: 'Regular updates, clear reporting, and honest conversations'
              },
              {
                title: 'Scalable Services',
                description: 'Solutions that grow with your business needs'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With AZFEXA?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business grow and succeed.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Schedule a Consultation <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
