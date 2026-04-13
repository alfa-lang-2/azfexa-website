import { MessageSquare, Lightbulb, Map, Zap, MessageCircle, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: 1,
      label: 'Contact',
      description: 'Reach out to our team and let us know about your project and goals.',
      icon: MessageSquare,
    },
    {
      number: 2,
      label: 'Analysis',
      description: 'We conduct a thorough analysis of your business, market, and target audience.',
      icon: Lightbulb,
    },
    {
      number: 3,
      label: 'Strategy',
      description: 'We develop a comprehensive strategy tailored to your specific needs and objectives.',
      icon: Map,
    },
    {
      number: 4,
      label: 'Execution',
      description: 'Our expert team executes the strategy across all service modules with precision.',
      icon: Zap,
    },
    {
      number: 5,
      label: 'Feedback',
      description: 'We gather your feedback and continuously optimize our approach for best results.',
      icon: MessageCircle,
    },
    {
      number: 6,
      label: 'Delivery',
      description: 'We deliver exceptional results that exceed expectations and drive measurable growth.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="process" className="section bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-accent">Our Process</h2>
          <p className="text-lg text-foreground/70">
            A proven six-step workflow designed to deliver exceptional results every time.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent" />

            {/* Steps Grid */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="text-center">
                    {/* Icon Circle */}
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-card border-4 border-background flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                          <Icon size={32} className="text-accent-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Step Number and Label */}
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                        Step {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-accent">{step.label}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Vertical Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-20 w-1 h-16 bg-gradient-to-b from-accent to-secondary" />
                )}

                {/* Step Content */}
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                      <Icon size={24} className="text-accent-foreground" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                      Step {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-accent mb-2">{step.label}</h3>
                    <p className="text-sm text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            Ready to start your journey with AZFEXA?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
          >
            Begin Your Transformation <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
