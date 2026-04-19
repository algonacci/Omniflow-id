import { ArrowRight, Award, CheckCircle, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
	getCurrentLocaleFromPath,
	getLangPrefix,
	trackCTAEvent,
} from "../../../../lib/website";

export default function CTASection() {
	const { t } = useTranslation();
	const location = useLocation();
	const currentLang = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(currentLang);

	const handlePrimaryCTA = () => {
		void trackCTAEvent({
			ctaKey: "habitat_cta_schedule_demo",
			locale: currentLang,
			moduleKey: "habitat",
		}).catch(() => undefined);
	};

	const handleSecondaryCTA = () => {
		void trackCTAEvent({
			ctaKey: "habitat_cta_contact_sales",
			locale: currentLang,
			moduleKey: "habitat",
		}).catch(() => undefined);
	};

	return (
		<section className="section-enterprise gradient-dark text-white">
			<div className="container-enterprise">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<div className="inline-flex items-center px-4 py-2 bg-blue-800 text-blue-100 rounded-full text-sm font-semibold mb-6">
							<CheckCircle className="h-4 w-4 mr-2" />
							{t("habitat.cta.badge")}
						</div>
						<h2 className="text-white mb-6">{t("habitat.cta.title")}</h2>
						<p className="text-blue-100 mb-8 text-xl leading-relaxed">
							{t("habitat.cta.subtitle")}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 mb-8">
							<Link
								to={`${langPrefix}/contact`}
								onClick={handlePrimaryCTA}
								className="btn-cta-light group"
							>
								{t("habitat.cta.scheduleDemo")}
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</Link>
							<Link
								to={`${langPrefix}/contact`}
								onClick={handleSecondaryCTA}
								className="btn-cta-outline"
							>
								{t("habitat.cta.contactSales")}
							</Link>
						</div>
						<div className="flex items-center space-x-6 text-blue-100">
							<div className="flex items-center">
								<CheckCircle className="h-4 w-4 mr-2" />
								<span className="text-sm">{t("habitat.cta.features.trial")}</span>
							</div>
							<div className="flex items-center">
								<CheckCircle className="h-4 w-4 mr-2" />
								<span className="text-sm">{t("habitat.cta.features.setup")}</span>
							</div>
							<div className="flex items-center">
								<CheckCircle className="h-4 w-4 mr-2" />
								<span className="text-sm">
									{t("habitat.cta.features.support")}
								</span>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
									<Users className="h-6 w-6 text-white" />
								</div>
								<div>
									<div className="text-2xl font-bold text-white">2,000+</div>
									<div className="text-blue-100">
										{t("habitat.cta.stats.users")}
									</div>
								</div>
							</div>
						</div>

						<div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
									<Award className="h-6 w-6 text-white" />
								</div>
								<div>
									<div className="text-2xl font-bold text-white">99.9%</div>
									<div className="text-blue-100">
										{t("habitat.cta.stats.uptime")}
									</div>
								</div>
							</div>
						</div>

						<div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
									<TrendingUp className="h-6 w-6 text-white" />
								</div>
								<div>
									<div className="text-2xl font-bold text-white">+92%</div>
									<div className="text-blue-100">
										{t("habitat.cta.stats.reduction")}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
