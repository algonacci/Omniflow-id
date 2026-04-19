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

export default function EventTicketingPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("eventTicketing.title")}
				description={t("eventTicketing.subtitle")}
				keywords="Event Ticketing, QR Code Check-in, Event Management, Ticket Sales, Event Registration, Indonesia event, tiket acara, sistem tiket"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow EventTicketing",
					description: t("eventTicketing.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("eventTicketing.cta.features.trial"),
					},
					featureList: [
						t("eventTicketing.features.events.title"),
						t("eventTicketing.features.checkin.title"),
						t("eventTicketing.features.attendees.title"),
						t("eventTicketing.features.payments.title"),
						t("eventTicketing.features.communications.title"),
						t("eventTicketing.features.analytics.title"),
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
