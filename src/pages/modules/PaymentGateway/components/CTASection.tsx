import { ArrowRight, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CTASection() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise gradient-dark text-white">
			<div className="container-enterprise text-center">
				<div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6">
					<CreditCard className="h-4 w-4 mr-2" />
					{t("paymentGateway.cta.badge")}
				</div>
				<h2 className="text-white mb-6">{t("paymentGateway.cta.title")}</h2>
				<p className="text-blue-100 mb-12 max-w-3xl mx-auto text-xl">
					{t("paymentGateway.cta.subtitle")}
				</p>
				<div className="flex flex-col sm:flex-row gap-6 justify-center">
					<button type="button" className="btn-cta-light">
						{t("paymentGateway.cta.scheduleDemo")}
						<ArrowRight className="ml-2 h-5 w-5" />
					</button>
					<button type="button" className="btn-cta-outline">
						{t("paymentGateway.cta.contactSales")}
					</button>
				</div>
			</div>
		</section>
	);
}
