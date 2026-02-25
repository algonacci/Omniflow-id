import { CheckCircle, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Benefits() {
	const { t } = useTranslation();

	const benefits = [
		{
			icon: <CheckCircle className="h-8 w-8 text-green-600" />,
			title: t("accounting.benefits.accuracy.title"),
			description: t("accounting.benefits.accuracy.description"),
		},
		{
			icon: <CheckCircle className="h-8 w-8 text-green-600" />,
			title: t("accounting.benefits.compliance.title"),
			description: t("accounting.benefits.compliance.description"),
		},
		{
			icon: <CheckCircle className="h-8 w-8 text-green-600" />,
			title: t("accounting.benefits.automation.title"),
			description: t("accounting.benefits.automation.description"),
		},
		{
			icon: <TrendingUp className="h-8 w-8 text-green-600" />,
			title: t("accounting.benefits.insights.title"),
			description: t("accounting.benefits.insights.description"),
		},
	];

	return (
		<section className="section-enterprise bg-gray-50">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
						<TrendingUp className="h-4 w-4 mr-2" />
						{t("accounting.benefits.badge")}
					</div>
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("accounting.benefits.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("accounting.benefits.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<div key={index} className="card-enterprise p-8">
							<div className="flex justify-center mb-4">
								{benefit.icon}
							</div>
							<h3 className="text-xl font-bold text-enterprise-primary mb-2">
								{benefit.title}
							</h3>
							<p className="text-enterprise-secondary">
								{benefit.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
