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

export default function PurchasingPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("purchasing.title")}
				description={t("purchasing.subtitle")}
				keywords="Purchasing Software, Procurement Management, Vendor Management, Purchase Order, RFQ, Supplier Management, Indonesia Purchasing Software, aplikasi pembelian, sistem procurement, software pembelian terbaik, manajemen supplier"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Purchasing",
					description: t("purchasing.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("purchasing.cta.features.trial"),
					},
					featureList: [
						t("purchasing.features.requisition.title"),
						t("purchasing.features.rfq.title"),
						t("purchasing.features.vendors.title"),
						t("purchasing.features.approvals.title"),
						t("purchasing.features.reporting.title"),
						t("purchasing.features.compliance.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "Procurement Management Services",
					description: t("purchasing.subtitle"),
					serviceType: "Purchasing Management System",
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
