import { BlogPost } from "../../types/blog";
import BlogCard from "./components/BlogCard";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "How HRIS Can Transform Your HR Department",
    excerpt:
      "Discover the key benefits of implementing a modern HRIS solution...",
    date: "2024-03-15",
    author: "John Smith",
    category: "HR Technology",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Top 5 Benefits of Automated Time Tracking",
    excerpt:
      "Explore how automated time tracking systems can save time and improve accuracy.",
    date: "2024-01-25",
    author: "Michael Chen",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Maximizing ROI with CRM Tools",
    excerpt:
      "Understand how CRM tools can help businesses achieve higher ROI by improving customer relationships.",
    date: "2023-12-20",
    author: "James Peterson",
    category: "CRM Solutions",
    image:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&q=80",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Latest Insights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
