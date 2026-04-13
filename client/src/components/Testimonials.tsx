import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder, TechStartup Co.',
      content:
        'AZFEXA transformed how we manage our digital presence. Having all services in one place saved us time and money while delivering consistent results across all channels.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content:
        'The team at AZFEXA is incredibly professional and responsive. Our brand visibility increased significantly within the first three months of working with them.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Personal Brand, Content Creator',
      content:
        'As a content creator, I needed help managing everything from branding to influencer partnerships. AZFEXA delivered exactly what I needed with a personal touch.',
      rating: 5,
      avatar: '👩‍🎨',
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CEO, Digital Agency',
      content:
        'We partnered with AZFEXA for our website redesign and social media overhaul. The quality of work and attention to detail exceeded our expectations.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Owner, E-commerce Store',
      content:
        'The integrated approach to digital marketing and content creation helped us reach a wider audience. Our sales have grown substantially since partnering with AZFEXA.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Founder, Creative Agency',
      content:
        'AZFEXA is a game-changer for businesses looking to streamline their digital operations. Their expertise across all service areas is unmatched.',
      rating: 5,
      avatar: '👨‍💼',
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-accent">What Our Clients Say</h2>
          <p className="text-lg text-foreground/70">
            Real results from real clients who have transformed their business with AZFEXA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="feature-card hover:border-secondary/50"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-accent">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
              <p className="text-sm text-foreground/70">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <p className="text-sm text-foreground/70">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-sm text-foreground/70">Active Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <p className="text-sm text-foreground/70">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
