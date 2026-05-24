import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, User, Clock, ArrowRight, Share2 } from 'lucide-react';
import { useLocation } from 'wouter';
import { getArticleBySlug, getRelatedArticles } from '@/lib/blog-data';
import { addArticleSchema } from '@/lib/seo-schema';
import { Streamdown } from 'streamdown';

export default function BlogArticle() {
  const [location, navigate] = useLocation();
  
  // Extract slug from URL path
  const slug = location.split('/blog/')[1];
  const article = slug ? getArticleBySlug(slug) : null;
  const relatedArticles = article ? getRelatedArticles(article.id) : [];

  useEffect(() => {
    if (article) {
      document.title = article.seoTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.seoDescription);
      }

      // Add schema markup
      addArticleSchema(article);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <button
            onClick={() => navigate('/blog')}
            className="text-accent hover:text-accent/80 transition-colors mb-4 flex items-center gap-2"
          >
            ← Back to Blog
          </button>
          
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm">{article.category}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">{article.title}</h1>
          
          <div className="flex flex-wrap gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <Streamdown>{article.content}</Streamdown>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-bold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => navigate('/blog')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="font-bold text-gray-900 mb-4">Share This Article</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Share2 size={18} className="mr-2" /> Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Related Articles</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Card
                  key={relatedArticle.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedArticle.slug}`)}
                >
                  <div className="h-48 overflow-hidden bg-slate-200">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="p-6">
                    <div className="inline-block mb-3 px-3 py-1 bg-accent/20 rounded-full">
                      <span className="text-xs font-semibold text-accent">{relatedArticle.category}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 line-clamp-2">{relatedArticle.title}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-2 text-sm">{relatedArticle.excerpt}</p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/blog/${relatedArticle.slug}`);
                      }}
                    >
                      Read More <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement These Strategies?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let AZFEXA help you execute these strategies and achieve your business goals.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
