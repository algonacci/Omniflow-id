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

export default function ECFPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("ecf.title")}
				description={t("ecf.subtitle")}
				keywords="Equity Crowdfunding, ECF Platform, Investment Platform, Project Funding, Profit Sharing, Indonesia ECF, crowdfunding, pendanaan proyek"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow ECF",
					description: t("ecf.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("ecf.cta.features.trial"),
					},
					featureList: [
						t("ecf.features.projects.title"),
						t("ecf.features.investors.title"),
						t("ecf.features.distribution.title"),
						t("ecf.features.kyc.title"),
						t("ecf.features.documents.title"),
						t("ecf.features.transactions.title"),
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
