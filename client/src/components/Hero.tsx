import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            <span className="text-sm font-medium text-accent">Welcome to AZFEXA</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-accent">
            Your Complete <span className="gradient-text">A-to-Z</span> Creative & Digital Solutions
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
            From branding and social media to website development and influencer marketing—AZFEXA brings all your digital needs under one unified platform. Simplify your workflow, amplify your impact, and grow your brand with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 px-8"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-sm text-foreground/60 mb-6">Trusted by startups and businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['Startups', 'SMBs', 'Personal Brands', 'Influencers'].map((item) => (
                <div key={item} className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">✓</div>
                  <p className="text-sm text-foreground/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
