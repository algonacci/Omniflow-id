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

export default function SIMKlinikPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("simklinik.title")}
				description={t("simklinik.subtitle")}
				keywords="Clinic Management System, Hospital Management, EMR, SIMKlinik, Healthcare Software, Indonesia clinic, sistem klinik, SIMRS"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow SIMKlinik",
					description: t("simklinik.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("simklinik.cta.features.trial"),
					},
					featureList: [
						t("simklinik.features.patients.title"),
						t("simklinik.features.appointments.title"),
						t("simklinik.features.records.title"),
						t("simklinik.features.pharmacy.title"),
						t("simklinik.features.billing.title"),
						t("simklinik.features.doctors.title"),
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
