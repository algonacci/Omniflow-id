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

export default function XRMPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("xrm.hero.title")}
				description={t("xrm.hero.subtitle")}
				keywords="XRM, Extended Relationship Management, CRM++, User Management, RBAC, Activity Logging, Two-Factor Authentication, Job Queue, Redis Caching, Mobile App, Flutter, iOS, Android, Omniflow"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow XRM",
					description: t("xrm.hero.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser, iOS, Android",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("xrm.cta.getStarted"),
					},
					featureList: [
						t("xrm.features.mobileApp.title"),
						t("xrm.features.users.title"),
						t("xrm.features.rbac.title"),
						t("xrm.features.activityLogs.title"),
						t("xrm.features.twofa.title"),
						t("xrm.features.caching.title"),
						t("xrm.features.queue.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "XRM Implementation Services",
					description: t("xrm.hero.subtitle"),
					serviceType: "Extended Relationship Management",
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
