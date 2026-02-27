import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Advantages from "../components/Advantages";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Modules from "../components/Modules";
import SEOHead from "../components/SEOHead";
import StructuredData from "../components/StructuredData";

export default function HomePage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("hero.title")}
				description={t("hero.subtitle")}
				keywords="software ERP terbaik, ERP Indonesia, sistem ERP perusahaan, aplikasi ERP, ERP untuk perusahaan, software stok barang, aplikasi inventory gudang, sistem akuntansi online, software pembukuan perusahaan, aplikasi manufaktur, sistem HR payroll, software multi cabang, sistem integrasi penjualan dan gudang, ERP manufaktur, ERP distributor, ERP retail, ERP kontraktor, ERP F\u0026B, ERP rumah sakit, ERP sekolah, ERP lokal terbaik, harga ERP, biaya implementasi ERP, ERP murah, ERP untuk UMKM, ERP gratis, software bisnis murah, aplikasi manajemen usaha kecil"
				type="website"
			/>
			<StructuredData type="WebSite" />
			<StructuredData type="Organization" />
			<StructuredData type="SoftwareApplication" />

			<Hero />
			<Modules />
			<Advantages />
			<FAQ />
			<Contact />
		</>
	);
}
