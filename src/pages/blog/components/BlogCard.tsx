import React from 'react';
import { BlogPost } from '../../../types/blog';
import { formatDate } from '../../../utils/date';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
          <a href={`/blog/${post.id}`}>{post.title}</a>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center">
          <span className="text-sm text-gray-500">By {post.author}</span>
        </div>
      </div>
    </article>
  );
}