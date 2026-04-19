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

export default function CustomersPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("customers.title")}
				description={t("customers.subtitle")}
				keywords="Customer Management, CRM, Customer Data Platform, Customer Profiles, Loyalty Program, Indonesia CRM, manajemen pelanggan, aplikasi CRM"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Customers",
					description: t("customers.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("customers.cta.features.trial"),
					},
					featureList: [
						t("customers.features.profiles.title"),
						t("customers.features.segmentation.title"),
						t("customers.features.history.title"),
						t("customers.features.loyalty.title"),
						t("customers.features.communication.title"),
						t("customers.features.analytics.title"),
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
