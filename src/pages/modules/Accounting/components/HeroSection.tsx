import { Calculator } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
	const { t } = useTranslation();

	return (
		<section className="section-hero">
			<div className="container-enterprise">
				<div className="text-center max-w-4xl mx-auto">
					<div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
						<Calculator className="h-4 w-4 mr-2" />
						{t("accounting.hero.badge")}
					</div>
					<h1 className="text-enterprise-primary mb-6">
						{t("accounting.hero.title")}
					</h1>
					<p className="text-xl text-enterprise-secondary mb-12">
						{t("accounting.hero.subtitle")}
					</p>
				</div>
			</div>
		</section>
	);
}
