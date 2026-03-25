import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../../components/SEOHead";
import StructuredData from "../../../components/StructuredData";
import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Screenshots from "./components/Screenshots";
import Testimonials from "./components/Testimonials";

export default function SalesPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("sales.title")}
				description={t("sales.subtitle")}
				keywords="Sales Software, Sales Management, CRM, Sales Automation, Pipeline Management, Lead Management, Sales Analytics, Indonesia Sales Software, aplikasi penjualan, sistem CRM, software sales terbaik, manajemen penjualan, sales pipeline, lead tracking"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Sales",
					description: t("sales.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("sales.cta.features.trial"),
					},
					featureList: [
						t("sales.features.pipeline.title"),
						t("sales.features.leads.title"),
						t("sales.features.deals.title"),
						t("sales.features.forecasting.title"),
						t("sales.features.mobile.title"),
						t("sales.features.integration.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "Sales Management Implementation Services",
					description: t("sales.subtitle"),
					serviceType: "Sales Management System",
				}}
			/>

			<div className="min-h-screen bg-white">
				<HeroSection />
				<Features />
				<Screenshots />
				<Benefits />
				<Testimonials />
				<CTASection />
			</div>
		</>
	);
}
