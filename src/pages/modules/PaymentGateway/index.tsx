import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../../components/SEOHead";
import StructuredData from "../../../components/StructuredData";
import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";

export default function PaymentGatewayPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("paymentGateway.hero.title")}
				description={t("paymentGateway.hero.subtitle")}
				keywords="Payment Gateway, Payment Gateway Indonesia, Payment Processor, Online Payment, E-commerce Payment, Midtrans, Virtual Account, Credit Card Payment, QRIS, E-Wallet, Payment Integration, Payment API, Transaction Management, Secure Payment, Payment Analytics"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Payment Gateway",
					description: t("paymentGateway.hero.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("paymentGateway.cta.scheduleDemo"),
					},
					featureList: [
						t("paymentGateway.features.multipleGateways.title"),
						t("paymentGateway.features.paymentMethods.title"),
						t("paymentGateway.features.security.title"),
						t("paymentGateway.features.instantNotification.title"),
						t("paymentGateway.features.transactionManagement.title"),
						t("paymentGateway.features.analytics.title"),
						t("paymentGateway.features.mobileReady.title"),
						t("paymentGateway.features.multiCurrency.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "Payment Gateway Services",
					description: t("paymentGateway.hero.subtitle"),
					serviceType: "Payment Processing",
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
