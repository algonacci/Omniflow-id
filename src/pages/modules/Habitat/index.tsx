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

export default function HabitatPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("habitat.title")}
				description={t("habitat.subtitle")}
				keywords="Community Management, Apartment Management, Residential Management, Housing Estate, Indonesia community, manajemen komunitas, manajemen perumahan"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Habitat",
					description: t("habitat.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("habitat.cta.features.trial"),
					},
					featureList: [
						t("habitat.features.members.title"),
						t("habitat.features.facilities.title"),
						t("habitat.features.announcements.title"),
						t("habitat.features.billing.title"),
						t("habitat.features.visitors.title"),
						t("habitat.features.reports.title"),
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
