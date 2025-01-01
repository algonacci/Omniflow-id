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
    id: 2,
    title: "The Future of Customer Data Management",
    excerpt:
      "Learn how businesses are leveraging advanced tools to organize and utilize customer data effectively.",
    date: "2024-02-10",
    author: "Jane Doe",
    category: "Customer Insights",
    image:
      "https://images.unsplash.com/photo-1581092127988-2fe8b6f0189c?auto=format&fit=crop&q=80",
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
    id: 4,
    title: "Boosting Employee Engagement with Gamification",
    excerpt:
      "Discover innovative ways to enhance employee engagement using gamification techniques.",
    date: "2024-01-10",
    author: "Emily Johnson",
    category: "Employee Engagement",
    image:
      "https://images.unsplash.com/photo-1587614382346-b8c9f6d1c22b?auto=format&fit=crop&q=80",
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
  },
  {
    id: 6,
    title: "The Evolution of HR Technology in 2024",
    excerpt:
      "A comprehensive look at the latest trends and innovations in HR technology this year.",
    date: "2023-12-01",
    author: "Sarah Connor",
    category: "HR Technology",
    image:
      "https://images.unsplash.com/photo-1601924917081-948b60a1e09e?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    title: "Why Employee Wellness Matters More Than Ever",
    excerpt:
      "Learn why prioritizing employee wellness is critical for business success.",
    date: "2023-11-15",
    author: "Emma Rodriguez",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1592496001029-c3b07857d2e0?auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Top Strategies for Retaining Top Talent",
    excerpt:
      "Explore proven strategies to retain top-performing employees in your organization.",
    date: "2023-11-05",
    author: "David Clark",
    category: "Talent Management",
    image:
      "https://images.unsplash.com/photo-1494314679561-03e0a6b53228?auto=format&fit=crop&q=80",
  },
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
