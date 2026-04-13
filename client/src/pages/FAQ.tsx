import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQ | AZFEXA - Frequently Asked Questions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find answers to common questions about AZFEXA services, pricing, process, and how we help businesses grow through digital marketing and branding.');
    }
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does AZFEXA offer?',
      answer: 'AZFEXA offers comprehensive A-to-Z digital solutions including Branding, Social Media Marketing, Website Development, Content Creation, Digital Marketing, and Influencer Marketing & PR. All services are designed to work together seamlessly.'
    },
    {
      question: 'Who is AZFEXA best for?',
      answer: 'AZFEXA specializes in serving startups, small-to-medium businesses (SMBs), and personal brands. We understand the unique challenges these businesses face and provide scalable, affordable solutions.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. Most branding projects take 4-8 weeks, website development 6-12 weeks, and marketing campaigns are ongoing. We provide detailed timelines during the initial consultation.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing based on project scope and your budget. Options include project-based pricing, monthly retainers, and performance-based pricing. We\'ll work with you to find a model that fits your needs.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! We work with clients worldwide. Our team is distributed across time zones, allowing us to provide support and collaboration across different regions.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We track KPIs specific to your business goals, including website traffic, lead generation, conversions, social media growth, and ROI. Monthly reports keep you informed of progress.'
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! We often collaborate with in-house teams. We can work as an extension of your team, take full project ownership, or anything in between.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'We offer unlimited revisions until you\'re satisfied. Your success is our success. If something isn\'t working, we\'ll adjust our approach until we get it right.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply contact us to schedule a free consultation. We\'ll discuss your goals, challenges, and how AZFEXA can help. No obligation—just a conversation about your business.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes! We provide ongoing support and maintenance for all projects. Many clients work with us on retainer for continuous optimization and growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-2xl text-gray-300">Find answers to common questions about AZFEXA</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card 
                key={idx}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{faq.question}</h3>
                  <ChevronDown 
                    size={24} 
                    className={`text-accent flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                  />
                </div>
                
                {openIndex === idx && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Contact Us <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Learn More About Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Branding', desc: 'Build a distinctive brand identity' },
              { title: 'Social Media', desc: 'Grow your audience and engagement' },
              { title: 'Web Development', desc: 'Create powerful websites' },
              { title: 'Content Creation', desc: 'Engage your audience with quality content' },
              { title: 'Digital Marketing', desc: 'Drive qualified traffic and conversions' },
              { title: 'Influencer Marketing', desc: 'Build authority through partnerships' }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation with our team to discuss your project.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
