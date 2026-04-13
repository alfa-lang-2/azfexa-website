import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '/faq' },
  ];

  const serviceLinks = [
    { label: 'Branding', href: '/services/branding' },
    { label: 'Social Media', href: '/services/social-media' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Content Creation', href: '/services/content-creation' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Influencer Marketing', href: '/services/influencer-marketing' },
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={handleLogoClick}>
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">AZ</span>
            </div>
            <span className="text-xl font-bold text-accent hidden sm:inline">AZFEXA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
              size="sm"
              onClick={() => navigate('/#contact')}
            >
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border pt-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  navigate(link.href);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium text-foreground/70 hover:text-accent transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Services Submenu */}
            <div className="pt-4 border-t border-border">
              <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-3">Services</p>
              <div className="space-y-2 pl-2">
                {serviceLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      navigate(link.href);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left text-sm text-foreground/60 hover:text-accent transition-colors py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-4"
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/#contact');
              }}
            >
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
