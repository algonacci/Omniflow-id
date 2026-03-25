import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LanguageRedirect from "./components/LanguageRedirect.tsx";
import BlogPage from "./pages/blog";
import BlogDetailPage from "./pages/blog/[slug]";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import IntegrationsPage from "./pages/integrations";
import ModulesPage from "./pages/modules";
import AccountingPage from "./pages/modules/Accounting/index.tsx";
import BizzcardPage from "./pages/modules/Bizzcard/index.tsx";
import CommercePage from "./pages/modules/Commerce/index.tsx";
import HRISPage from "./pages/modules/HRIS";
import LMSPage from "./pages/modules/LMS/index.tsx";
import PaymentGatewayPage from "./pages/modules/PaymentGateway/index.tsx";
import PoSPage from "./pages/modules/PoS/index.tsx";
import TelemarketingPage from "./pages/modules/Telemarketing/index.tsx";
import URLsPage from "./pages/modules/URLs/index.tsx";
import XRMPage from "./pages/modules/XRM/index.tsx";
import AnalyticsPage from "./pages/modules/Analytics/index.tsx";
import SalesPage from "./pages/modules/Sales/index.tsx";
import PurchasingPage from "./pages/modules/Purchasing/index.tsx";
import AssetManagementPage from "./pages/modules/AssetManagement/index.tsx";
import InventoryPage from "./pages/modules/Inventory/index.tsx";
import NotFoundPage from "./pages/NotFound";

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		// Set HTML lang attribute based on current language
		document.documentElement.lang = i18n.language;
	}, [i18n.language]);

	return (
		<Router>
			<div className="min-h-screen bg-white">
				<Header />
				<main>
					<Routes>
						{/* Root redirect */}
						<Route path="/" element={<LanguageRedirect />} />

						{/* English routes */}
						<Route path="/en" element={<HomePage />} />
						<Route path="/en/modules" element={<ModulesPage />} />
						<Route path="/en/integrations" element={<IntegrationsPage />} />
						<Route path="/en/modules/hris" element={<HRISPage />} />
						<Route path="/en/modules/ecommerce" element={<CommercePage />} />
						<Route
							path="/en/modules/commerce"
							element={<Navigate to="/en/modules/ecommerce" replace />}
						/>
						<Route path="/en/modules/xrm" element={<XRMPage />} />
						<Route path="/en/modules/accounting" element={<AccountingPage />} />
						<Route path="/en/modules/analytics" element={<AnalyticsPage />} />
						<Route path="/en/modules/urls" element={<URLsPage />} />
						<Route path="/en/modules/bizzcard" element={<BizzcardPage />} />
						<Route path="/en/modules/pos" element={<PoSPage />} />
						<Route path="/en/modules/lms" element={<LMSPage />} />
						<Route
							path="/en/modules/telemarketing"
							element={<TelemarketingPage />}
						/>
						<Route
							path="/en/modules/payment-gateway"
							element={<PaymentGatewayPage />}
						/>
						<Route path="/en/modules/sales" element={<SalesPage />} />
						<Route path="/en/modules/purchasing" element={<PurchasingPage />} />
						<Route path="/en/modules/asset-management" element={<AssetManagementPage />} />
						<Route path="/en/modules/inventory" element={<InventoryPage />} />
						<Route path="/en/blog" element={<BlogPage />} />
						<Route path="/en/blog/:slug" element={<BlogDetailPage />} />
						<Route path="/en/contact" element={<ContactPage />} />

						{/* Indonesian routes */}
						<Route path="/id" element={<HomePage />} />
						<Route path="/id/modules" element={<ModulesPage />} />
						<Route path="/id/integrations" element={<IntegrationsPage />} />
						<Route path="/id/modules/hris" element={<HRISPage />} />
						<Route path="/id/modules/ecommerce" element={<CommercePage />} />
						<Route
							path="/id/modules/commerce"
							element={<Navigate to="/id/modules/ecommerce" replace />}
						/>
						<Route path="/id/modules/xrm" element={<XRMPage />} />
						<Route path="/id/modules/accounting" element={<AccountingPage />} />
						<Route path="/id/modules/analytics" element={<AnalyticsPage />} />
						<Route path="/id/modules/urls" element={<URLsPage />} />
						<Route path="/id/modules/bizzcard" element={<BizzcardPage />} />
						<Route path="/id/modules/pos" element={<PoSPage />} />
						<Route path="/id/modules/lms" element={<LMSPage />} />
						<Route
							path="/id/modules/telemarketing"
							element={<TelemarketingPage />}
						/>
						<Route
							path="/id/modules/payment-gateway"
							element={<PaymentGatewayPage />}
						/>
						<Route path="/id/modules/sales" element={<SalesPage />} />
						<Route path="/id/modules/purchasing" element={<PurchasingPage />} />
						<Route path="/id/modules/asset-management" element={<AssetManagementPage />} />
						<Route path="/id/modules/inventory" element={<InventoryPage />} />
						<Route path="/id/blog" element={<BlogPage />} />
						<Route path="/id/blog/:slug" element={<BlogDetailPage />} />
						<Route path="/id/contact" element={<ContactPage />} />

						{/* Chinese routes */}
						<Route path="/zh" element={<HomePage />} />
						<Route path="/zh/modules" element={<ModulesPage />} />
						<Route path="/zh/integrations" element={<IntegrationsPage />} />
						<Route path="/zh/modules/hris" element={<HRISPage />} />
						<Route path="/zh/modules/ecommerce" element={<CommercePage />} />
						<Route
							path="/zh/modules/commerce"
							element={<Navigate to="/zh/modules/ecommerce" replace />}
						/>
						<Route path="/zh/modules/xrm" element={<XRMPage />} />
						<Route path="/zh/modules/accounting" element={<AccountingPage />} />
						<Route path="/zh/modules/analytics" element={<AnalyticsPage />} />
						<Route path="/zh/modules/urls" element={<URLsPage />} />
						<Route path="/zh/modules/bizzcard" element={<BizzcardPage />} />
						<Route path="/zh/modules/pos" element={<PoSPage />} />
						<Route path="/zh/modules/lms" element={<LMSPage />} />
						<Route
							path="/zh/modules/telemarketing"
							element={<TelemarketingPage />}
						/>
						<Route
							path="/zh/modules/payment-gateway"
							element={<PaymentGatewayPage />}
						/>
						<Route path="/zh/modules/sales" element={<SalesPage />} />
						<Route path="/zh/modules/purchasing" element={<PurchasingPage />} />
						<Route path="/zh/modules/asset-management" element={<AssetManagementPage />} />
						<Route path="/zh/modules/inventory" element={<InventoryPage />} />
						<Route path="/zh/blog" element={<BlogPage />} />
						<Route path="/zh/blog/:slug" element={<BlogDetailPage />} />
						<Route path="/zh/contact" element={<ContactPage />} />

						{/* Legacy routes (redirect to language-specific) */}
						<Route path="/" element={<HomePage />} />
						<Route path="/modules" element={<ModulesPage />} />
						<Route path="/integrations" element={<IntegrationsPage />} />
						<Route path="/modules/hris" element={<HRISPage />} />
						<Route path="/modules/ecommerce" element={<CommercePage />} />
						<Route
							path="/modules/commerce"
							element={<Navigate to="/modules/ecommerce" replace />}
						/>
						<Route path="/modules/analytics" element={<AnalyticsPage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/blog/:slug" element={<BlogDetailPage />} />
						<Route path="/contact" element={<ContactPage />} />

						{/* Catch-all route for 404 */}
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
