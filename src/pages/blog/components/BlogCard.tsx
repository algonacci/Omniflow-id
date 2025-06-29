import React from 'react';
import { BlogPost } from '../../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    // Convert from "30/06/2025, 01.07" format to readable date
    const [datePart] = dateString.split(', ');
    const [day, month, year] = datePart.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getExcerpt = (content: string, maxLength: number = 150) => {
    // Remove markdown formatting and get plain text
    const plainText = content
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
      .replace(/\n/g, ' ') // Replace newlines with spaces
      .trim();
    
    return plainText.length > maxLength 
      ? plainText.substring(0, maxLength) + '...'
      : plainText;
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={post.banner_url}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{formatDate(post.created_at)}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h2>
        <p className="text-gray-600 mb-4">{getExcerpt(post.content)}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600 font-medium">Read More</span>
          <div className="text-xs text-gray-400">
            {post.meta_keywords.split(', ').slice(0, 2).map((keyword, index) => (
              <span key={index} className="inline-block bg-gray-100 px-2 py-1 rounded mr-1">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}