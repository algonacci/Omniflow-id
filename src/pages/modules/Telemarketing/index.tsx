import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../../components/SEOHead";
import StructuredData from "../../../components/StructuredData";
import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";

export default function TelemarketingPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("telemarketing.hero.title")}
				description={t("telemarketing.hero.subtitle")}
				keywords="Telemarketing, Auto Dialer, Call Center Software, Outbound Calling, Customer Contact, Voice Broadcasting, Sales Automation, Omniflow"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Telemarketing",
					description: t("telemarketing.hero.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("telemarketing.cta.scheduleDemo"),
					},
					featureList: [
						t("telemarketing.features.contacts.title"),
						t("telemarketing.features.audio.title"),
						t("telemarketing.features.autodial.title"),
						t("telemarketing.features.analytics.title"),
						t("telemarketing.features.scripts.title"),
						t("telemarketing.features.templates.title"),
						t("telemarketing.features.scheduling.title"),
						t("telemarketing.features.logs.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "Telemarketing Services",
					description: t("telemarketing.hero.subtitle"),
					serviceType: "Outbound Telemarketing",
				}}
			/>

			<div className="min-h-screen bg-white">
				<HeroSection />
				<Features />
				<Benefits />
				<CTASection />
			</div>
		</>
	);
}
