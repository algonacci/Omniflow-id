import { MonitorPlay, Package, CreditCard, Printer, WifiOff, Store } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
	const { t } = useTranslation();

	const features = [
		{
			icon: <MonitorPlay className="h-12 w-12 text-orange-600" />,
			title: t("pos.features.posSystem.title"),
			description: t("pos.features.posSystem.description"),
		},
		{
			icon: <Package className="h-12 w-12 text-orange-600" />,
			title: t("pos.features.inventory.title"),
			description: t("pos.features.inventory.description"),
		},
		{
			icon: <CreditCard className="h-12 w-12 text-orange-600" />,
			title: t("pos.features.payment.title"),
			description: t("pos.features.payment.description"),
		},
		{
			icon: <Printer className="h-12 w-12 text-orange-600" />,
			title: t("pos.features.receipts.title"),
			description: t("pos.features.receipts.description"),
		},
		{
			icon: <WifiOff className="h-12 w-12 text-orange-600" />,
			title: t("pos.features.offline.title"),
			description: t("pos.features.offline.description"),
		},
		{
			icon: <Store className="h-12 w-12 text-orange-600" />,
			title: t("pos.features.multiStore.title"),
			description: t("pos.features.multiStore.description"),
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("pos.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("pos.features.subtitle")}
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
