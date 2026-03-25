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

export default function InventoryPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("inventory.title")}
				description={t("inventory.subtitle")}
				keywords="Inventory Management Software, Stock Management, Warehouse Management, SKU Tracking, Inventory Control, Indonesia Inventory Software, software inventory, manajemen inventori, sistem stock management, aplikasi inventory terbaik, warehouse management system"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Inventory",
					description: t("inventory.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("inventory.cta.features.trial"),
					},
					featureList: [
						t("inventory.features.tracking.title"),
						t("inventory.features.warehouse.title"),
						t("inventory.features.orders.title"),
						t("inventory.features.forecasting.title"),
						t("inventory.features.reporting.title"),
						t("inventory.features.barcoding.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "Inventory Management Services",
					description: t("inventory.subtitle"),
					serviceType: "Inventory Management System",
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
