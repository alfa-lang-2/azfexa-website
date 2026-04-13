import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const services = [
    'Branding',
    'Social Media',
    'Website Development',
    'Content Creation',
    'Digital Marketing',
    'Influencer Marketing & PR',
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@azfexa.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, USA',
    },
  ];

  return (
    <section id="contact" className="section bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-accent">Get In Touch</h2>
          <p className="text-lg text-foreground/70">
            Ready to start your digital transformation? Contact us today and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Icon size={24} className="text-secondary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-1">{info.label}</p>
                      <p className="text-foreground/70">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-accent mb-3">Response Time</h4>
              <p className="text-sm text-foreground/70">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-accent mb-2">
                  Service of Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-accent mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Tell us about your project and goals..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 font-semibold"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-foreground/60 text-center">
                We respect your privacy. Your information will be kept confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
