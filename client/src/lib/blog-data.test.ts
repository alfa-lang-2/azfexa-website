import { describe, expect, it } from 'vitest';
import {
  blogArticles,
  categories,
  getArticleBySlug,
  getArticlesByCategory,
  getRelatedArticles,
  searchArticles,
} from './blog-data';

describe('Blog Data', () => {
  it('should have 8 articles', () => {
    expect(blogArticles).toHaveLength(8);
  });

  it('should have all required article fields', () => {
    blogArticles.forEach((article) => {
      expect(article).toHaveProperty('id');
      expect(article).toHaveProperty('title');
      expect(article).toHaveProperty('slug');
      expect(article).toHaveProperty('excerpt');
      expect(article).toHaveProperty('content');
      expect(article).toHaveProperty('author');
      expect(article).toHaveProperty('date');
      expect(article).toHaveProperty('category');
      expect(article).toHaveProperty('tags');
      expect(article).toHaveProperty('image');
      expect(article).toHaveProperty('readTime');
      expect(article).toHaveProperty('seoTitle');
      expect(article).toHaveProperty('seoDescription');
    });
  });

  it('should have 6 categories', () => {
    expect(categories).toHaveLength(6);
    expect(categories).toContain('Branding');
    expect(categories).toContain('Social Media');
    expect(categories).toContain('Digital Marketing');
    expect(categories).toContain('Content Creation');
    expect(categories).toContain('Web Development');
    expect(categories).toContain('Influencer Marketing');
  });

  it('should find article by slug', () => {
    const article = getArticleBySlug('complete-guide-modern-branding-2026');
    expect(article).toBeDefined();
    expect(article?.title).toBe('The Complete Guide to Modern Branding in 2026');
  });

  it('should return undefined for non-existent slug', () => {
    const article = getArticleBySlug('non-existent-article');
    expect(article).toBeUndefined();
  });

  it('should get articles by category', () => {
    const brandingArticles = getArticlesByCategory('Branding');
    expect(brandingArticles.length).toBeGreaterThan(0);
    brandingArticles.forEach((article) => {
      expect(article.category).toBe('Branding');
    });
  });

  it('should get related articles', () => {
    const article = blogArticles[0];
    const related = getRelatedArticles(article.id, 3);
    
    // Should not include the original article
    expect(related.every((a) => a.id !== article.id)).toBe(true);
    
    // Should be from the same category
    related.forEach((a) => {
      expect(a.category).toBe(article.category);
    });
  });

  it('should search articles by title', () => {
    const results = searchArticles('branding');
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((a) => a.title.toLowerCase().includes('branding'))).toBe(true);
  });

  it('should search articles by tags', () => {
    const results = searchArticles('marketing');
    expect(results.length).toBeGreaterThan(0);
  });

  it('should return empty array for no search matches', () => {
    const results = searchArticles('xyz123nonexistent');
    expect(results).toHaveLength(0);
  });

  it('should have unique article slugs', () => {
    const slugs = blogArticles.map((a) => a.slug);
    const uniqueSlugs = new Set(slugs);
    expect(slugs.length).toBe(uniqueSlugs.size);
  });

  it('should have SEO metadata for all articles', () => {
    blogArticles.forEach((article) => {
      expect(article.seoTitle).toBeTruthy();
      expect(article.seoTitle.length).toBeGreaterThan(0);
      expect(article.seoDescription).toBeTruthy();
      expect(article.seoDescription.length).toBeGreaterThan(0);
    });
  });
});
