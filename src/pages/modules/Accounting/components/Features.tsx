import { Calculator, FileText, TrendingUp, PieChart, Wallet, Receipt } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
	const { t } = useTranslation();

	const features = [
		{
			icon: <FileText className="h-12 w-12 text-green-600" />,
			title: t("accounting.features.generalLedger.title"),
			description: t("accounting.features.generalLedger.description"),
		},
		{
			icon: <PieChart className="h-12 w-12 text-green-600" />,
			title: t("accounting.features.chartOfAccounts.title"),
			description: t("accounting.features.chartOfAccounts.description"),
		},
		{
			icon: <Wallet className="h-12 w-12 text-green-600" />,
			title: t("accounting.features.accountsPayable.title"),
			description: t("accounting.features.accountsPayable.description"),
		},
		{
			icon: <TrendingUp className="h-12 w-12 text-green-600" />,
			title: t("accounting.features.accountsReceivable.title"),
			description: t("accounting.features.accountsReceivable.description"),
		},
		{
			icon: <Receipt className="h-12 w-12 text-green-600" />,
			title: t("accounting.features.invoicing.title"),
			description: t("accounting.features.invoicing.description"),
		},
		{
			icon: <Calculator className="h-12 w-12 text-green-600" />,
			title: t("accounting.features.reports.title"),
			description: t("accounting.features.reports.description"),
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("accounting.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("accounting.features.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div key={index} className="card-enterprise p-8 text-center">
							<div className="flex justify-center mb-4">
								{feature.icon}
							</div>
							<h3 className="text-xl font-bold text-enterprise-primary mb-2">
								{feature.title}
							</h3>
							<p className="text-enterprise-secondary">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
