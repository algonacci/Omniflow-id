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

export default function AssetManagementPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("assetManagement.title")}
				description={t("assetManagement.subtitle")}
				keywords="Asset Management Software, Fixed Asset Management, Asset Tracking, Depreciation Management, Asset Lifecycle, Indonesia Asset Management, software aset, manajemen aset tetap, sistem asset tracking, software fixed asset terbaik"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Asset Management",
					description: t("assetManagement.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("assetManagement.cta.features.trial"),
					},
					featureList: [
						t("assetManagement.features.tracking.title"),
						t("assetManagement.features.depreciation.title"),
						t("assetManagement.features.lifecycle.title"),
						t("assetManagement.features.maintenance.title"),
						t("assetManagement.features.reports.title"),
						t("assetManagement.features.integration.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "Asset Management Implementation Services",
					description: t("assetManagement.subtitle"),
					serviceType: "Asset Management System",
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
