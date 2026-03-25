import {
	ArrowRight,
	Award,
	BarChart,
	CheckCircle,
	TrendingUp,
	Play,
	Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
	const { t } = useTranslation();

	return (
		<section className="section-hero">
			<div className="container-enterprise">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8 animate-fade-in-left">
						<div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-semibold">
							<CheckCircle className="h-4 w-4 mr-2" />
							{t("assetManagement.badge")}
						</div>

						<h1 className="text-enterprise-primary">{t("assetManagement.title")}</h1>

						<p className="text-xl text-enterprise-secondary max-w-2xl">
							{t("assetManagement.subtitle")}
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<button className="btn-primary group">
								{t("assetManagement.hero.scheduleDemo")}
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</button>
							<button className="btn-secondary group">
								<Play className="mr-2 h-5 w-5" />
								{t("assetManagement.hero.watchOverview")}
							</button>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
							<div className="text-center">
								<div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-3">
									<Users className="h-6 w-6 text-violet-600" />
								</div>
								<div className="text-2xl font-bold text-violet-600">25K+</div>
								<div className="text-sm text-enterprise-muted">
									{t("assetManagement.hero.stats.users")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
									<Award className="h-6 w-6 text-purple-600" />
								</div>
								<div className="text-2xl font-bold text-purple-600">99.9%</div>
								<div className="text-sm text-enterprise-muted">
									{t("assetManagement.hero.stats.uptime")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-fuchsia-100 rounded-xl flex items-center justify-center mx-auto mb-3">
									<TrendingUp className="h-6 w-6 text-fuchsia-600" />
								</div>
								<div className="text-2xl font-bold text-fuchsia-600">50%</div>
								<div className="text-sm text-enterprise-muted">
									{t("assetManagement.hero.stats.efficiency")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
									<BarChart className="h-6 w-6 text-pink-600" />
								</div>
								<div className="text-2xl font-bold text-pink-600">95%</div>
								<div className="text-sm text-enterprise-muted">
									{t("assetManagement.hero.stats.accuracy")}
								</div>
							</div>
						</div>
					</div>

					<div className="relative animate-fade-in-right">
						<div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-700/20 rounded-3xl transform rotate-3"></div>
						<img
							src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=800"
							alt="Asset Management Dashboard"
							className="relative rounded-3xl shadow-enterprise-lg"
						/>
						<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-enterprise">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
									<CheckCircle className="h-6 w-6 text-violet-600" />
								</div>
								<div>
									<div className="font-semibold text-enterprise-primary">
										{t("assetManagement.hero.accuracyImprovement")}
									</div>
									<div className="text-2xl font-bold text-violet-600">+95%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
