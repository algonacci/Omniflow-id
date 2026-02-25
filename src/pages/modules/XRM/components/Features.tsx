import { Users, Shield, Clock, FileText, Database, Send, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
	const { t } = useTranslation();

	const features = [
		{
			icon: <Smartphone className="h-12 w-12 text-purple-600" />,
			title: t("xrm.features.mobileApp.title"),
			description: t("xrm.features.mobileApp.description"),
		},
		{
			icon: <Users className="h-12 w-12 text-purple-600" />,
			title: t("xrm.features.users.title"),
			description: t("xrm.features.users.description"),
		},
		{
			icon: <Shield className="h-12 w-12 text-purple-600" />,
			title: t("xrm.features.rbac.title"),
			description: t("xrm.features.rbac.description"),
		},
		{
			icon: <Clock className="h-12 w-12 text-purple-600" />,
			title: t("xrm.features.activityLogs.title"),
			description: t("xrm.features.activityLogs.description"),
		},
		{
			icon: <FileText className="h-12 w-12 text-purple-600" />,
			title: t("xrm.features.twofa.title"),
			description: t("xrm.features.twofa.description"),
		},
		{
			icon: <Database className="h-12 w-12 text-purple-600" />,
			title: t("xrm.features.caching.title"),
			description: t("xrm.features.caching.description"),
		},
		{
			icon: <Send className="h-12 w-12 text-purple-600" />,
			title: t("xrm.features.queue.title"),
			description: t("xrm.features.queue.description"),
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("xrm.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("xrm.features.subtitle")}
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
