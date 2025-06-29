import React, { useState, useEffect } from 'react';
import { BlogPost, BlogResponse } from '../../types/blog';
import BlogCard from './components/BlogCard';
import { Loader2, BookOpen, TrendingUp, Users, Award } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://824f-103-163-240-34.ngrok-free.app/api/blogs', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
          },
          mode: 'cors'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: BlogResponse = await response.json();
        
        if (data.success && data.data && data.data.blogs) {
          setPosts(data.data.blogs);
        } else {
          throw new Error('Invalid API response structure');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching blogs';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container-enterprise">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="h-4 w-4 mr-2" />
                Knowledge Hub
              </div>
              <h1 className="text-enterprise-primary mb-6">
                Enterprise Insights & Resources
              </h1>
              <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
                Stay ahead with the latest trends in business technology, digital transformation, and enterprise solutions.
              </p>
            </div>
          </div>
        </section>

        <div className="section-enterprise">
          <div className="container-enterprise">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-6 text-blue-600" />
                <p className="text-xl text-enterprise-secondary">Loading latest insights...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container-enterprise">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="h-4 w-4 mr-2" />
                Knowledge Hub
              </div>
              <h1 className="text-enterprise-primary mb-6">
                Enterprise Insights & Resources
              </h1>
              <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
                Stay ahead with the latest trends in business technology, digital transformation, and enterprise solutions.
              </p>
            </div>
          </div>
        </section>

        <div className="section-enterprise">
          <div className="container-enterprise">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center max-w-md">
                <div className="card-enterprise p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-enterprise-primary mb-4">Unable to Load Content</h3>
                  <p className="text-enterprise-secondary mb-6">{error}</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="btn-primary"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-enterprise">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Knowledge Hub
            </div>
            <h1 className="text-enterprise-primary mb-6">
              Enterprise Insights & Resources
            </h1>
            <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto mb-12">
              Stay ahead with the latest trends in business technology, digital transformation, and enterprise solutions that drive success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card-enterprise p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-enterprise-primary mb-2">Industry Trends</h3>
                <p className="text-enterprise-muted text-sm">Latest market insights and forecasts</p>
              </div>
              <div className="card-enterprise p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-enterprise-primary mb-2">Best Practices</h3>
                <p className="text-enterprise-muted text-sm">Proven strategies from industry leaders</p>
              </div>
              <div className="card-enterprise p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-enterprise-primary mb-2">Success Stories</h3>
                <p className="text-enterprise-muted text-sm">Real-world transformation cases</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="section-enterprise gradient-secondary">
        <div className="container-enterprise">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="card-enterprise p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-enterprise-primary mb-4">Coming Soon</h3>
                <p className="text-enterprise-secondary">We're preparing valuable content for you. Check back soon for the latest insights and resources.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-enterprise-primary mb-4">Latest Articles</h2>
                <p className="text-enterprise-secondary">Discover actionable insights to transform your business operations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-enterprise gradient-dark text-white">
        <div className="container-enterprise text-center">
          <h2 className="text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-12 max-w-3xl mx-auto text-xl">
            Join thousands of forward-thinking companies that have revolutionized their operations with Omniflow.id's enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-primary bg-white text-blue-700 hover:bg-blue-50">
              Schedule a Demo
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-blue-700">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}