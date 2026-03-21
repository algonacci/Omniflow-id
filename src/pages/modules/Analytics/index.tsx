import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../../components/SEOHead";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Screenshots from "./components/Screenshots";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import StructuredData from "../../../components/StructuredData";

export default function AnalyticsPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("analytics.title", "Analytics & Integrations - Omniflow")}
				description={t("analytics.subtitle", "Integrated Analytics Solutions")}
				keywords={t("analytics.keywords", "Analytics, BCA, OrderOnline, Majoo, Moka, Integrations, Dashboard, Enterprise Analytics")}
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Analytics",
					description: t("analytics.subtitle", "Integrated Analytics Solutions"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "IDR",
						description: t("common.scheduleDemo", "Schedule Demo"),
					},
					featureList: [
						"BCA Integration",
						"OrderOnline Integration",
						"Majoo Integration",
						"Moka Integration",
						"Shopee Integration",
						"Custom API Integration"
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "Enterprise Analytics Integration Hub",
					description: t("analytics.subtitle", "Integrated Analytics Solutions"),
					serviceType: "Data Analytics Platform",
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
