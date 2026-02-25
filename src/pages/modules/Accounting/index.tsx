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

export default function AccountingPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("accounting.hero.title")}
				description={t("accounting.hero.subtitle")}
				keywords="Accounting Software, General Ledger, Accounts Payable, Accounts Receivable, Financial Reporting, Chart of Accounts, Invoicing, Financial Management, Omniflow"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Accounting",
					description: t("accounting.hero.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("accounting.cta.getStarted"),
					},
					featureList: [
						t("accounting.features.generalLedger.title"),
						t("accounting.features.chartOfAccounts.title"),
						t("accounting.features.accountsPayable.title"),
						t("accounting.features.accountsReceivable.title"),
						t("accounting.features.invoicing.title"),
						t("accounting.features.reports.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "Accounting Implementation Services",
					description: t("accounting.hero.subtitle"),
					serviceType: "Financial Management System",
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
