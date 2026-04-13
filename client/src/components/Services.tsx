import { Palette, Share2, Globe, Camera, TrendingUp, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      name: 'Branding',
      description: 'Create a distinctive brand identity with logo design, brand guidelines, and comprehensive visual identity systems that resonate with your audience.',
      icon: Palette,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Social Media',
      description: 'Manage your social presence with content calendars, engaging post creation, compelling captions, and detailed analytics dashboards.',
      icon: Share2,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      name: 'Website Development',
      description: 'Build powerful online presence with custom website development, stunning landing pages, and professional portfolio websites.',
      icon: Globe,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      name: 'Content Creation',
      description: 'Produce high-quality visual content including professional photography, videography, and engaging short-form content for social media.',
      icon: Camera,
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 5,
      name: 'Digital Marketing',
      description: 'Drive growth with strategic SEO optimization, paid ads management, and sophisticated lead generation systems.',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 6,
      name: 'Influencer Marketing & PR',
      description: 'Expand your reach through influencer discovery, strategic outreach, campaign management, and comprehensive performance tracking.',
      icon: Users,
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="services" className="section bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-accent">Our Core Services</h2>
          <p className="text-lg text-foreground/70">
            Six comprehensive modules working together to deliver complete digital transformation for your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card group"
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-accent mb-3">{service.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <span className="ml-2">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Digital Presence?</h3>
          <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can help your business achieve its goals.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Schedule a Consultation <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
