import { Clock, Globe, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Benefits() {
	const { t } = useTranslation();

	const benefits = [
		{
			icon: <TrendingUp className="h-8 w-8 text-green-600" />,
			title: t("telemarketing.benefits.conversion.title"),
			description: t("telemarketing.benefits.conversion.description"),
		},
		{
			icon: <Zap className="h-8 w-8 text-yellow-600" />,
			title: t("telemarketing.benefits.efficiency.title"),
			description: t("telemarketing.benefits.efficiency.description"),
		},
		{
			icon: <Shield className="h-8 w-8 text-red-600" />,
			title: t("telemarketing.benefits.compliance.title"),
			description: t("telemarketing.benefits.compliance.description"),
		},
		{
			icon: <Globe className="h-8 w-8 text-blue-600" />,
			title: t("telemarketing.benefits.reach.title"),
			description: t("telemarketing.benefits.reach.description"),
		},
		{
			icon: <Clock className="h-8 w-8 text-purple-600" />,
			title: t("telemarketing.benefits.automation.title"),
			description: t("telemarketing.benefits.automation.description"),
		},
		{
			icon: <Users className="h-8 w-8 text-orange-600" />,
			title: t("telemarketing.benefits.team.title"),
			description: t("telemarketing.benefits.team.description"),
		},
	];

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("telemarketing.benefits.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("telemarketing.benefits.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<div
							key={index}
							className="card-enterprise p-8 hover:shadow-xl transition-shadow duration-300"
						>
							<div className="flex items-center mb-4">
								<div className="p-3 bg-gray-100 rounded-xl mr-4">
									{benefit.icon}
								</div>
								<h3 className="text-xl font-bold text-enterprise-primary">
									{benefit.title}
								</h3>
							</div>
							<p className="text-enterprise-secondary">{benefit.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
