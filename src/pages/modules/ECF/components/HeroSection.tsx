import {
	ArrowRight,
	Coins,
	Users,
	TrendingUp,
	Shield,
	CheckCircle,
	Play,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
	const { t } = useTranslation();

	return (
		<section className="section-hero">
			<div className="container-enterprise">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8 animate-fade-in-left">
						<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
							<CheckCircle className="h-4 w-4 mr-2" />
							{t("ecf.badge")}
						</div>

						<h1 className="text-enterprise-primary">{t("ecf.title")}</h1>

						<p className="text-xl text-enterprise-secondary max-w-2xl">
							{t("ecf.subtitle")}
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<button className="btn-primary group">
								{t("ecf.hero.scheduleDemo")}
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</button>
							<button className="btn-secondary group">
								<Play className="mr-2 h-5 w-5" />
								{t("ecf.hero.watchOverview")}
							</button>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
							<div className="text-center">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
									<Coins className="h-6 w-6 text-blue-600" />
								</div>
								<div className="text-2xl font-bold text-blue-600">10K+</div>
								<div className="text-sm text-enterprise-muted">
									{t("ecf.hero.stats.users")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
									<Users className="h-6 w-6 text-blue-600" />
								</div>
								<div className="text-2xl font-bold text-blue-600">99.9%</div>
								<div className="text-sm text-enterprise-muted">
									{t("ecf.hero.stats.uptime")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
									<TrendingUp className="h-6 w-6 text-blue-600" />
								</div>
								<div className="text-2xl font-bold text-blue-600">50%</div>
								<div className="text-sm text-enterprise-muted">
									{t("ecf.hero.stats.funded")}
								</div>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
									<Shield className="h-6 w-6 text-blue-600" />
								</div>
								<div className="text-2xl font-bold text-blue-600">95%</div>
								<div className="text-sm text-enterprise-muted">
									{t("ecf.hero.stats.distributed")}
								</div>
							</div>
						</div>
					</div>

					<div className="relative animate-fade-in-right">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-3xl transform rotate-3"></div>
						<img
							src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
							alt={t("ecf.hero.imageAlt")}
							className="relative rounded-3xl shadow-enterprise-lg"
						/>
						<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-enterprise">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
									<CheckCircle className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<div className="font-semibold text-enterprise-primary">
										{t("ecf.hero.fundingBoost")}
									</div>
									<div className="text-2xl font-bold text-blue-600">3x</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
