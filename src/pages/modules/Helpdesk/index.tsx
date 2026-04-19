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

export default function HelpdeskPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("helpdesk.title")}
				description={t("helpdesk.subtitle")}
				keywords="Helpdesk Software, Customer Support, Ticket Management, SLA Management, Knowledge Base, Indonesia helpdesk, aplikasi helpdesk, sistem support"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Helpdesk",
					description: t("helpdesk.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("helpdesk.cta.features.trial"),
					},
					featureList: [
						t("helpdesk.features.tickets.title"),
						t("helpdesk.features.multichannel.title"),
						t("helpdesk.features.sla.title"),
						t("helpdesk.features.knowledge.title"),
						t("helpdesk.features.collaboration.title"),
						t("helpdesk.features.reports.title"),
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
