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

export default function ProfilexPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("profilex.title")}
				description={t("profilex.subtitle")}
				keywords="Psychological Assessment, MBTI, DISC, HR Assessment, Personality Test, Indonesia HR, asesmen psikologi, tes kepribadian"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Profilex",
					description: t("profilex.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("profilex.cta.features.trial"),
					},
					featureList: [
						t("profilex.features.mbti.title"),
						t("profilex.features.disc.title"),
						t("profilex.features.custom.title"),
						t("profilex.features.grading.title"),
						t("profilex.features.analytics.title"),
						t("profilex.features.reports.title"),
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
