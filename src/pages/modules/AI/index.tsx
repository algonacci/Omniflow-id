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

export default function AIPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("ai.title")}
				description={t("ai.subtitle")}
				keywords="AI platform, artificial intelligence, business automation, predictive analytics, ML platform, Indonesia AI software, machine learning, AI bisnis, otomatisasi AI"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow AI",
					description: t("ai.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("ai.cta.features.trial"),
					},
					featureList: [
						t("ai.features.predictive.title"),
						t("ai.features.automation.title"),
						t("ai.features.nlp.title"),
						t("ai.features.vision.title"),
						t("ai.features.recommendation.title"),
						t("ai.features.reports.title"),
					],
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
