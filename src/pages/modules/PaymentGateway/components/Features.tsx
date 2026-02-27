import {
	BarChart3,
	CreditCard,
	Globe,
	Receipt,
	Shield,
	Smartphone,
	Wallet,
	Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
	const { t } = useTranslation();

	const features = [
		{
			icon: <Wallet className="h-12 w-12 text-green-600" />,
			title: t("paymentGateway.features.multipleGateways.title"),
			description: t("paymentGateway.features.multipleGateways.description"),
		},
		{
			icon: <CreditCard className="h-12 w-12 text-green-600" />,
			title: t("paymentGateway.features.paymentMethods.title"),
			description: t("paymentGateway.features.paymentMethods.description"),
		},
		{
			icon: <Shield className="h-12 w-12 text-green-600" />,
			title: t("paymentGateway.features.security.title"),
			description: t("paymentGateway.features.security.description"),
		},
		{
			icon: <Zap className="h-12 w-12 text-green-600" />,
			title: t("paymentGateway.features.instantNotification.title"),
			description: t("paymentGateway.features.instantNotification.description"),
		},
		{
			icon: <Receipt className="h-12 w-12 text-green-600" />,
			title: t("paymentGateway.features.transactionManagement.title"),
			description: t(
				"paymentGateway.features.transactionManagement.description"
			),
		},
		{
			icon: <BarChart3 className="h-12 w-12 text-green-600" />,
			title: t("paymentGateway.features.analytics.title"),
			description: t("paymentGateway.features.analytics.description"),
		},
		{
			icon: <Smartphone className="h-12 w-12 text-green-600" />,
			title: t("paymentGateway.features.mobileReady.title"),
			description: t("paymentGateway.features.mobileReady.description"),
		},
		{
			icon: <Globe className="h-12 w-12 text-green-600" />,
			title: t("paymentGateway.features.multiCurrency.title"),
			description: t("paymentGateway.features.multiCurrency.description"),
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("paymentGateway.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("paymentGateway.features.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div key={index} className="card-enterprise p-8 text-center">
							<div className="flex justify-center mb-4">{feature.icon}</div>
							<h3 className="text-xl font-bold text-enterprise-primary mb-2">
								{feature.title}
							</h3>
							<p className="text-enterprise-secondary">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
