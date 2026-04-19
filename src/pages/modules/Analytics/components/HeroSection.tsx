import { ArrowRight, BarChart2, CheckCircle, Database, Play, TrendingUp, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
	const { t } = useTranslation();

	return (
		<section className="section-hero relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-bl from-blue-200/40 to-indigo-200/40 blur-3xl" />
            </div>

			<div className="container-enterprise relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8 animate-fade-in-left">
						<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold shadow-sm">
							<BarChart2 className="h-4 w-4 mr-2" />
							{t("analytics.badge", "Advanced Analytics Platform")}
						</div>

						<h1 className="text-enterprise-primary leading-tight">
                            {t("analytics.hero.title", "Data-Driven Decisions for Enterprise")}
                        </h1>

						<p className="text-xl text-enterprise-secondary max-w-2xl leading-relaxed">
							{t("analytics.hero.subtitle", "Connect your essential business tools and view unified, real-time analytics to make faster, smarter decisions.")}
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<button id="hero-schedule-demo-analytics" className="btn-primary group !bg-blue-600 hover:!bg-blue-700">
								{t("common.scheduleDemo")}
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
							</button>
							<button id="hero-watch-demo-analytics" className="btn-secondary group">
								<Play className="mr-2 h-5 w-5 text-blue-600" aria-hidden="true" />
								{t("common.watchDemo")}
							</button>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-blue-100">
							<div className="text-center">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
									<Database className="h-6 w-6 text-blue-600" />
								</div>
								<div className="text-2xl font-bold text-blue-600">50+</div>
								<div className="text-sm text-enterprise-muted">
									{t("analytics.hero.stats.integrations", "Integrations")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
									<Zap className="h-6 w-6 text-emerald-600" />
								</div>
								<div className="text-2xl font-bold text-emerald-600">&lt;1s</div>
								<div className="text-sm text-enterprise-muted">
									{t("analytics.hero.stats.latency", "Sync Latency")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
									<TrendingUp className="h-6 w-6 text-blue-600" />
								</div>
								<div className="text-2xl font-bold text-blue-600">3x</div>
								<div className="text-sm text-enterprise-muted">
									{t("analytics.hero.stats.growth", "Faster Analysis")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
									<BarChart2 className="h-6 w-6 text-orange-600" />
								</div>
								<div className="text-2xl font-bold text-orange-600">99%</div>
								<div className="text-sm text-enterprise-muted">
									{t("analytics.hero.stats.accuracy", "Data Accuracy")}
								</div>
							</div>
						</div>
					</div>

					<div className="relative animate-fade-in-right">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-3xl transform rotate-3"></div>
						<img
							src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
							alt={t(
								"analytics.hero.imageAlt",
								"Analytics dashboard showing live business integrations and KPI trends",
							)}
							className="relative rounded-3xl shadow-enterprise-lg object-cover h-[500px] w-full"
						/>
						
                        {/* Floating elements */}
						<div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-enterprise border border-white">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
									<TrendingUp className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<div className="font-semibold text-enterprise-primary">
										{t("analytics.hero.productivityBoost", "Revenue Growth")}
									</div>
									<div className="text-2xl font-bold text-green-600">+124%</div>
								</div>
							</div>
						</div>
                        <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-enterprise border border-white">
							<div className="flex items-center space-x-3">
								<CheckCircle className="h-5 w-5 text-fuchsia-600" />
								<span className="font-medium text-slate-700">Live Sync Active</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
