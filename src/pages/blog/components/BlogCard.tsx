import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getCurrentLocaleFromPath, getLangPrefix } from "../../../lib/website";
import type { BlogPost } from "../../../types/blog";

interface BlogCardProps {
	post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
	const { t } = useTranslation();
	const location = useLocation();
	const currentLang = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(currentLang);

	const formatDate = (dateString: string) => {
		const [datePart] = dateString.split(", ");
		const [day, month, year] = datePart.split("/");
		const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const getExcerpt = (content: string, maxLength = 150) => {
		const plainText = content
			.replace(/#{1,6}\s+/g, "")
			.replace(/\*\*(.*?)\*\*/g, "$1")
			.replace(/\*(.*?)\*/g, "$1")
			.replace(/\[(.*?)\]\(.*?\)/g, "$1")
			.replace(/\n/g, " ")
			.trim();

		return plainText.length > maxLength
			? `${plainText.substring(0, maxLength)}...`
			: plainText;
	};

	const getReadingTime = (content: string) => {
		const wordsPerMinute = 200;
		const wordCount = content.split(" ").length;
		return Math.ceil(wordCount / wordsPerMinute);
	};

	return (
		<article className="card-enterprise group cursor-pointer overflow-hidden">
			<div className="relative overflow-hidden">
				<img
					src={
						post.banner_url ||
						"https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
					}
					alt={post.title}
					className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>

			<div className="p-8">
				<div className="flex items-center text-sm text-enterprise-muted mb-4 space-x-4">
					<div className="flex items-center">
						<Calendar className="h-4 w-4 mr-2" />
						<span>{formatDate(post.created_at)}</span>
					</div>
					<div className="flex items-center">
						<Clock className="h-4 w-4 mr-2" />
						<span>
							{getReadingTime(post.content)} {t("blog.minutes")}
						</span>
					</div>
				</div>

				<h2 className="text-xl font-bold text-enterprise-primary mb-4 group-hover:text-blue-600 transition-colors leading-tight">
					<Link to={`${langPrefix}/blog/${post.slug}`}>{post.title}</Link>
				</h2>

				<p className="text-enterprise-secondary mb-6 leading-relaxed">
					{getExcerpt(post.content)}
				</p>

				<div className="flex items-center justify-between">
					<Link
						to={`${langPrefix}/blog/${post.slug}`}
						className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
					>
						{t("blog.cta.readMore")}
						<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
					</Link>

					<div className="flex flex-wrap gap-2">
						{post.meta_keywords
							.split(", ")
							.slice(0, 2)
							.map((keyword, index) => (
								<span
									key={index}
									className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
								>
									{keyword}
								</span>
							))}
					</div>
				</div>
			</div>
		</article>
	);
}
