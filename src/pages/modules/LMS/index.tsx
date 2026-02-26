import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import SEOHead from "../../../components/SEOHead";
import StructuredData from "../../../components/StructuredData";
import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Screenshots from "./components/Screenshots";
import Testimonials from "./components/Testimonials";

export default function LMSPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("lmsModule.hero.title")}
				description={t("lmsModule.hero.subtitle")}
				keywords="LMS, Learning Management System, Assessment, Quiz, Question Bank, Online Learning, Education Platform, Training, Corporate Learning, E-Learning, Omniflow"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow LMS",
					description: t("lmsModule.hero.subtitle"),
					applicationCategory: "EducationApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("lmsModule.cta.getStarted"),
					},
					featureList: [
						t("lmsModule.features.assessments.title"),
						t("lmsModule.features.questionBank.title"),
						t("lmsModule.features.questionTypes.title"),
						t("lmsModule.features.tracking.title"),
						t("lmsModule.features.bulkUpload.title"),
						t("lmsModule.features.multiTenant.title"),
						t("lmsModule.features.grading.title"),
						t("lmsModule.features.categories.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "LMS Implementation Services",
					description: t("lmsModule.hero.subtitle"),
					serviceType: "Learning Management System",
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
