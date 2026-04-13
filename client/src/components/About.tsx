import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const targetUsers = [
    {
      title: 'Startups',
      description: 'Launch your brand with a complete digital strategy and professional execution from day one.',
    },
    {
      title: 'Small & Medium Businesses',
      description: 'Scale your operations with integrated services that grow alongside your business.',
    },
    {
      title: 'Personal Brands',
      description: 'Build your reputation and influence with cohesive branding and strategic content.',
    },
  ];

  const differentiators = [
    'Unified platform eliminates vendor fragmentation',
    'Seamless collaboration across all service modules',
    'Consistent brand messaging throughout all channels',
    'Integrated analytics and performance tracking',
    'Dedicated account management and support',
    'Scalable solutions that grow with your needs',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="mb-6 text-accent">Why Choose AZFEXA?</h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Managing multiple vendors for different services is inefficient, costly, and creates inconsistency. AZFEXA brings everything together under one unified platform, giving you a true A-to-Z solution for all your creative and digital needs.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {differentiators.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-accent mb-8">We Serve</h3>

                {targetUsers.map((user, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <h4 className="font-semibold text-accent">{user.title}</h4>
                    </div>
                    <p className="text-foreground/70 text-sm ml-5">
                      {user.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '6', label: 'Service Modules' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
