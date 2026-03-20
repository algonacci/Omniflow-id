import { ArrowRight, Zap } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";

const integrations = [
	{
		key: "odoo",
		name: "Odoo",
		description: "integrationsPage.odoo.description",
		logo: "O",
		color: "from-purple-500 to-purple-700",
	},
	{
		key: "sap",
		name: "SAP",
		description: "integrationsPage.sap.description",
		logo: "S",
		color: "from-blue-500 to-blue-700",
	},
	{
		key: "salesforce",
		name: "Salesforce",
		description: "integrationsPage.salesforce.description",
		logo: "SF",
		color: "from-cyan-500 to-cyan-700",
	},
	{
		key: "shopify",
		name: "Shopify",
		description: "integrationsPage.shopify.description",
		logo: "S",
		color: "from-green-500 to-green-700",
	},
	{
		key: "woocommerce",
		name: "WooCommerce",
		description: "integrationsPage.woocommerce.description",
		logo: "W",
		color: "from-pink-500 to-pink-700",
	},
	{
		key: "magento",
		name: "Magento",
		description: "integrationsPage.magento.description",
		logo: "M",
		color: "from-orange-500 to-orange-700",
	},
	{
		key: "dynamics",
		name: "Microsoft Dynamics",
		description: "integrationsPage.dynamics.description",
		logo: "D",
		color: "from-blue-600 to-blue-800",
	},
	{
		key: "quickbooks",
		name: "QuickBooks",
		description: "integrationsPage.quickbooks.description",
		logo: "Q",
		color: "from-green-600 to-green-800",
	},
	{
		key: "xero",
		name: "Xero",
		description: "integrationsPage.xero.description",
		logo: "X",
		color: "from-teal-500 to-teal-700",
	},
	{
		key: "slack",
		name: "Slack",
		description: "integrationsPage.slack.description",
		logo: "Sl",
		color: "from-violet-500 to-violet-700",
	},
	{
		key: "zoom",
		name: "Zoom",
		description: "integrationsPage.zoom.description",
		logo: "Z",
		color: "from-blue-400 to-blue-600",
	},
	{
		key: "zapier",
		name: "Zapier",
		description: "integrationsPage.zapier.description",
		logo: "Z",
		color: "from-red-500 to-red-700",
	},
];

export default function IntegrationsPage() {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={t("integrationsPage.title")}
				description={t("integrationsPage.subtitle")}
				keywords="ERP integrations, Omniflow integrations, Odoo, SAP, Salesforce, Shopify, WooCommerce"
				type="website"
			/>

			<section className="section-hero pt-32">
				<div className="container-enterprise">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8 animate-fade-in-left">
							<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
								<Zap className="h-4 w-4 mr-2" />
								{t("integrationsPage.badge")}
							</div>

							<h1 className="text-enterprise-primary">
								{t("integrationsPage.title")}
							</h1>

							<p className="text-xl text-enterprise-secondary max-w-2xl">
								{t("integrationsPage.subtitle")}
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Link to="/en/contact" className="btn-primary group">
									{t("integrationsPage.getStarted")}
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>

						<div className="relative animate-fade-in-right">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-3xl transform rotate-3"></div>
							<img
								src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
								alt="Omniflow Integrations"
								className="relative rounded-3xl shadow-enterprise-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="section-enterprise bg-white py-20">
				<div className="container-enterprise">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{integrations.map((integration) => (
							<div key={integration.key} className="card-feature group">
								<div
									className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${integration.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<span className="text-2xl font-bold text-white">
										{integration.logo}
									</span>
								</div>
								<h3 className="text-xl font-bold text-enterprise-primary mb-3">
									{integration.name}
								</h3>
								<p className="text-enterprise-secondary leading-relaxed">
									{t(integration.description)}
								</p>
								<div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
									{t("common.learnMore")} →
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section-enterprise bg-gradient-to-b from-gray-50 to-white py-20">
				<div className="container-enterprise">
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-enterprise-primary mb-6">
							{t("integrationsPage.cta.title")}
						</h2>
						<p className="text-xl text-enterprise-secondary mb-8">
							{t("integrationsPage.cta.description")}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link to="/en/contact" className="btn-primary group">
								{t("integrationsPage.cta.button")}
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
