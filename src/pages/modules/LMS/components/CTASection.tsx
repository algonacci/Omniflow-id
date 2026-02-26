import { ArrowRight, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export default function CTASection() {
	const { t } = useTranslation();
	const location = useLocation();

	const getCurrentLang = () => {
		const match = location.pathname.match(/^\/(en|id|zh)/);
		return match ? match[1] : "en";
	};

	const currentLang = getCurrentLang();

	return (
		<section className="section-enterprise bg-gradient-to-br from-teal-600 to-teal-800">
			<div className="container-enterprise text-center">
				<GraduationCap className="h-16 w-16 text-white/80 mx-auto mb-6" />
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
					{t("lmsModule.cta.title")}
				</h2>
				<p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
					{t("lmsModule.cta.subtitle")}
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						to={`/${currentLang}/contact`}
						className="btn-enterprise btn-white inline-flex items-center justify-center gap-2"
					>
						{t("lmsModule.cta.getStarted")}
						<ArrowRight className="h-5 w-5" />
					</Link>
					<Link
						to={`/${currentLang}/contact`}
						className="btn-enterprise btn-outline-white inline-flex items-center justify-center"
					>
						{t("lmsModule.cta.scheduleDemo")}
					</Link>
				</div>
			</div>
		</section>
	);
}
