import {
	ArrowLeft,
	BookOpen,
	Calendar,
	Clock,
	Facebook,
	Linkedin,
	Loader2,
	Tag,
	Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { Link, useLocation, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import SEOHead from "../../components/SEOHead";
import StructuredData from "../../components/StructuredData";
import {
	fetchWebsiteBlogDetail,
	getCurrentLocaleFromPath,
	getLangPrefix,
	trackCTAEvent,
} from "../../lib/website";
import type { BlogDetailResponse, BlogPost } from "../../types/blog";

export default function BlogDetailPage() {
	const { t } = useTranslation();
	const { slug } = useParams<{ slug: string }>();
	const location = useLocation();
	const currentLang = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(currentLang);
	const [post, setPost] = useState<BlogPost | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Scroll to top when component mounts or slug changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		const fetchBlogDetail = async () => {
			if (!slug) {
				setLoading(false);
				return;
			}

			try {
				setLoading(true);
				setError(null);

				const data = (await fetchWebsiteBlogDetail(
					currentLang,
					slug
				)) as BlogDetailResponse;

				if (data.success && data.data && data.data.blog) {
					setPost(data.data.blog);
					return;
				}

				// If blog not found, redirect to blog list with message
				setError("Article not available in this language");
				// Auto redirect after 3 seconds
				setTimeout(() => {
					window.location.href = `${langPrefix}/blog`;
				}, 3000);
				return;
			} catch (err) {
				const errorMessage =
					err instanceof Error
						? err.message
						: "An error occurred while fetching the blog post";
				setError(errorMessage);
			} finally {
				setLoading(false);
			}
		};

		fetchBlogDetail();
	}, [currentLang, slug, langPrefix]);

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

	const formatDateISO = (dateString: string) => {
		const [datePart] = dateString.split(", ");
		const [day, month, year] = datePart.split("/");
		const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
		return date.toISOString();
	};

	const shareUrl = window.location.href;
	const shareTitle = post?.title || "";

	const handleShare = (platform: string) => {
		const urls = {
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
			twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
			linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
		};

		window.open(
			urls[platform as keyof typeof urls],
			"_blank",
			"width=600,height=400"
		);
	};

	const handleConsultationClick = () => {
		void trackCTAEvent({
			ctaKey: "blog_detail_consultation",
			locale: currentLang,
			moduleKey: "blog",
		}).catch(() => undefined);
	};

	if (loading) {
		return (
			<>
				<SEOHead
					title={t("blog.loading")}
					description={t("blog.subtitle")}
					keywords="Blog Article, Business Insights, ERP, Technology"
					type="article"
				/>

				<div className="min-h-screen bg-white">
					<section className="section-hero">
						<div className="container-enterprise">
							<div className="text-center">
								<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
									<BookOpen className="h-4 w-4 mr-2" />
									{t("blog.loading")}
								</div>
								<div className="flex items-center justify-center min-h-[200px]">
									<div className="text-center">
										<Loader2 className="h-12 w-12 animate-spin mx-auto mb-6 text-blue-600" />
										<p className="text-xl text-enterprise-secondary">
											{t("blog.loading")}
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}

	if (error || !post) {
		return (
			<>
				<SEOHead
					title={t("blog.articleNotFound.title")}
					description={t("blog.articleNotFound.message")}
					keywords="Blog Article, Not Found, Error"
					type="article"
				/>

				<div className="min-h-screen bg-white">
					<section className="section-hero">
						<div className="container-enterprise">
							<div className="text-center">
								<Link
									to={`${langPrefix}/blog`}
									className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
								>
									<ArrowLeft className="h-4 w-4 mr-2" />
									{t("blog.backToBlog")}
								</Link>
								<div className="card-enterprise p-12 max-w-md mx-auto">
									<div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
										<BookOpen className="h-8 w-8 text-red-600" />
									</div>
									<h3 className="text-xl font-bold text-enterprise-primary mb-4">
										{t("blog.articleNotFound.title")}
									</h3>
									<p className="text-enterprise-secondary mb-6">
										{error || t("blog.articleNotFound.message")}
									</p>
									<Link to={`${langPrefix}/blog`} className="btn-primary">
										{t("blog.backToBlog")}
									</Link>
								</div>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}

	return (
		<>
			<SEOHead
				title={post.title}
				description={post.meta_description}
				keywords={post.meta_keywords}
				image={post.banner_url || undefined}
				type="article"
				publishedTime={formatDateISO(post.created_at)}
				modifiedTime={formatDateISO(post.updated_at)}
				author={post.author_name || "Omniflow.id Team"}
				section="Business Technology"
				tags={post.meta_keywords.split(", ")}
			/>
			<StructuredData
				type="Article"
				data={{
					headline: post.title,
					description: post.meta_description,
					image: post.banner_url,
					publishedTime: formatDateISO(post.created_at),
					modifiedTime: formatDateISO(post.updated_at),
					keywords: post.meta_keywords,
					wordCount: post.content.split(" ").length,
					content: post.content,
					section: "Business Technology",
				}}
			/>

			<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
				{/* Hero Section with Banner Image as Background */}
				<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
					<div
						className="absolute inset-0 bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `url(${post.banner_url || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1920"})`,
						}}
					/>
					<div className="absolute inset-0 bg-black/50" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

					<div className="relative z-10 container-enterprise px-6">
						<div className="max-w-4xl mx-auto text-center text-white">
							<Link
								to={`${langPrefix}/blog`}
								className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
							>
								<ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
								{t("blog.backToBlog")}
							</Link>

							<div className="space-y-6">
								{/* Article Meta */}
								<div className="flex items-center justify-center flex-wrap gap-6 text-white/90 text-sm">
									<div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
										<Calendar className="h-4 w-4 mr-2" />
										<span>{formatDate(post.created_at)}</span>
									</div>
									<div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
										<Clock className="h-4 w-4 mr-2" />
										<span>
											{Math.ceil(post.content.split(" ").length / 200)}{" "}
											{t("blog.readingTime")}
										</span>
									</div>
									<div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
										<Tag className="h-4 w-4 mr-2" />
										<span>{post.meta_keywords.split(", ")[0]}</span>
									</div>
								</div>

								{/* Title */}
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
									{post.title}
								</h1>

								{/* Description */}
								<p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
									{post.meta_description}
								</p>

								{/* Author */}
								<div className="flex items-center justify-center mt-8">
									<div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
										<span className="text-white/90">
											By {post.author_name || "Omniflow.id Team"}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Content Section */}
				<section className="py-16 lg:py-24">
					<div className="container mx-auto px-6">
						<div className="max-w-5xl mx-auto">
							{/* Tags Section */}
							<div className="mb-8 flex flex-wrap gap-3">
								{post.meta_keywords.split(", ").map((keyword) => (
									<span
										key={keyword}
										className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200"
									>
										<Tag className="h-3.5 w-3.5 mr-2" />
										{keyword}
									</span>
								))}
							</div>

							{/* Main Content */}
							<article>
								<div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
									<div className="p-8 lg:p-16">
										<div
											className="prose prose-lg lg:prose-xl max-w-none 
											prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
											prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
											prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-10 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
											prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
											prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
											prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-700
											prose-strong:text-gray-900 prose-strong:font-bold
											prose-ul:my-6 prose-ul:space-y-2
											prose-ol:my-6 prose-ol:space-y-2
											prose-li:text-gray-700 prose-li:leading-relaxed
											prose-code:bg-blue-50 prose-code:text-blue-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
											prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:p-6
											prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:rounded-r-xl prose-blockquote:italic
											prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-8
											prose-hr:border-gray-200 prose-hr:my-12
										"
										>
											<ReactMarkdown remarkPlugins={[remarkGfm]}>
												{post.content}
											</ReactMarkdown>
										</div>
									</div>
								</div>

								{/* Article Footer - Author & Share */}
								<div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
									<div className="flex flex-col md:flex-row items-center justify-between gap-6">
										{/* Author Info */}
										<div className="flex items-center gap-4">
											<div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
												{(post.author_name || "O")[0].toUpperCase()}
											</div>
											<div>
												<p className="text-sm text-gray-600 font-medium">
													Written by
												</p>
												<p className="text-lg font-bold text-gray-900">
													{post.author_name || "Omniflow.id Team"}
												</p>
											</div>
										</div>

										{/* Share Buttons */}
										<div className="flex items-center gap-3">
											<span className="text-sm font-semibold text-gray-700 mr-2">
												Share:
											</span>
											<button
												type="button"
												onClick={() => handleShare("facebook")}
												className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
												aria-label="Share on Facebook"
											>
												<Facebook className="h-4 w-4" />
											</button>
											<button
												type="button"
												onClick={() => handleShare("twitter")}
												className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
												aria-label="Share on Twitter"
											>
												<Twitter className="h-4 w-4" />
											</button>
											<button
												type="button"
												onClick={() => handleShare("linkedin")}
												className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
												aria-label="Share on LinkedIn"
											>
												<Linkedin className="h-4 w-4" />
											</button>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
					<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10" />
					<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90" />

					<div className="relative z-10 container-enterprise px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
							{t("blog.cta.title")}
						</h2>
						<p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
							{t("blog.cta.subtitle")}
						</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link
								to={`${langPrefix}/contact`}
								onClick={handleConsultationClick}
								className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								{t("blog.cta.consultation")}
							</Link>
							<Link
								to={`${langPrefix}/blog`}
								className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200 transform hover:-translate-y-1"
							>
								{t("blog.cta.readMore")}
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
