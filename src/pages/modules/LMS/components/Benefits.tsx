import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Benefits() {
	const { t } = useTranslation();

	const benefits = [
		{
			title: t("lmsModule.benefits.efficiency.title"),
			description: t("lmsModule.benefits.efficiency.description"),
		},
		{
			title: t("lmsModule.benefits.scalable.title"),
			description: t("lmsModule.benefits.scalable.description"),
		},
		{
			title: t("lmsModule.benefits.insights.title"),
			description: t("lmsModule.benefits.insights.description"),
		},
		{
			title: t("lmsModule.benefits.flexible.title"),
			description: t("lmsModule.benefits.flexible.description"),
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("lmsModule.benefits.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("lmsModule.benefits.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{benefits.map((benefit, index) => (
						<div key={index} className="flex gap-4">
							<div className="flex-shrink-0">
								<CheckCircle className="h-8 w-8 text-teal-600" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-enterprise-primary mb-2">
									{benefit.title}
								</h3>
								<p className="text-enterprise-secondary">
									{benefit.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
