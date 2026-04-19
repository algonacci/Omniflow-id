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

export default function PropertyManagementPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("propertyManagement.title")}
				description={t("propertyManagement.subtitle")}
				keywords="Property Management System, PMS, Real Estate Software, Landlord Software, Tenant Management, Indonesia property, manajemen properti, software properti"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow PropertyManagement",
					description: t("propertyManagement.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("propertyManagement.cta.features.trial"),
					},
					featureList: [
						t("propertyManagement.features.listings.title"),
						t("propertyManagement.features.tenants.title"),
						t("propertyManagement.features.leases.title"),
						t("propertyManagement.features.maintenance.title"),
						t("propertyManagement.features.payments.title"),
						t("propertyManagement.features.reports.title"),
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
