import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Branding',
    'Social Media',
    'Website Development',
    'Content Creation',
    'Digital Marketing',
    'Influencer Marketing & PR',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container py-16 md:py-24">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AZ</span>
              </div>
              <span className="text-xl font-bold">AZFEXA</span>
            </div>
            <p className="text-accent-foreground/80 text-sm">
              Your complete A-to-Z creative and digital solutions partner.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 3).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="font-semibold mb-4">More Services</h4>
            <ul className="space-y-2">
              {services.slice(3).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <a
              href="mailto:hello@azfexa.com"
              className="flex items-center gap-2 text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm mb-4"
            >
              <Mail size={16} />
              hello@azfexa.com
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-accent-foreground/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-accent-foreground/70">
          <p>&copy; {currentYear} AZFEXA. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
