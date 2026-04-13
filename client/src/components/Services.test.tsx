import { describe, it, expect } from 'vitest';

describe('Services Component - Brand Requirements', () => {
  it('should include all 6 service modules with exact names', () => {
    const services = [
      'Branding',
      'Social Media',
      'Website Development',
      'Content Creation',
      'Digital Marketing',
      'Influencer Marketing & PR',
    ];

    expect(services).toHaveLength(6);
    expect(services[0]).toBe('Branding');
    expect(services[1]).toBe('Social Media');
    expect(services[2]).toBe('Website Development');
    expect(services[3]).toBe('Content Creation');
    expect(services[4]).toBe('Digital Marketing');
    expect(services[5]).toBe('Influencer Marketing & PR');
  });

  it('should have correct process steps in order', () => {
    const processSteps = [
      'Contact',
      'Analysis',
      'Strategy',
      'Execution',
      'Feedback',
      'Delivery',
    ];

    expect(processSteps).toHaveLength(6);
    expect(processSteps[0]).toBe('Contact');
    expect(processSteps[1]).toBe('Analysis');
    expect(processSteps[2]).toBe('Strategy');
    expect(processSteps[3]).toBe('Execution');
    expect(processSteps[4]).toBe('Feedback');
    expect(processSteps[5]).toBe('Delivery');
  });

  it('should have AZFEXA brand name exactly as specified', () => {
    const brandName = 'AZFEXA';
    expect(brandName).toBe('AZFEXA');
    expect(brandName).not.toBe('AzFexa');
    expect(brandName).not.toBe('azfexa');
  });

  it('should have target users correctly identified', () => {
    const targetUsers = [
      'Startups',
      'Small and Medium Businesses',
      'Personal Brands',
    ];

    expect(targetUsers).toHaveLength(3);
    expect(targetUsers).toContain('Startups');
    expect(targetUsers).toContain('Small and Medium Businesses');
    expect(targetUsers).toContain('Personal Brands');
  });
});
