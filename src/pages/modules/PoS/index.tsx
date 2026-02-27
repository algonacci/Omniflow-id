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

export default function PoSPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("pos.hero.title")}
				description={t("pos.hero.subtitle")}
				keywords="POS, Point of Sale, Retail Management, Inventory Integration, Payment Processing, Receipt Printing, Offline Mode, Multi-Store, software stok barang, aplikasi inventory gudang, sistem kasir online, software retail Indonesia, aplikasi POS terbaik, sistem integrasi penjualan dan gudang, software multi cabang, ERP retail, aplikasi kasir UMKM"
				type="website"
			/>
			<StructuredData
				type="SoftwareApplication"
				data={{
					name: "Omniflow Point of Sale",
					description: t("pos.hero.subtitle"),
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web Browser, iOS, Android",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD",
						description: t("pos.cta.getStarted"),
					},
					featureList: [
						t("pos.features.posSystem.title"),
						t("pos.features.inventory.title"),
						t("pos.features.payment.title"),
						t("pos.features.receipts.title"),
						t("pos.features.offline.title"),
						t("pos.features.multiStore.title"),
					],
				}}
			/>
			<StructuredData
				type="Service"
				data={{
					name: "PoS Implementation Services",
					description: t("pos.hero.subtitle"),
					serviceType: "Point of Sale System",
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
