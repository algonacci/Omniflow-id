import {
	BarChart3,
	Clock,
	Database,
	Headphones,
	MessageSquare,
	Mic,
	Phone,
	Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
	const { t } = useTranslation();

	const features = [
		{
			icon: <Users className="h-12 w-12 text-blue-600" />,
			title: t("telemarketing.features.contacts.title"),
			description: t("telemarketing.features.contacts.description"),
		},
		{
			icon: <Mic className="h-12 w-12 text-blue-600" />,
			title: t("telemarketing.features.audio.title"),
			description: t("telemarketing.features.audio.description"),
		},
		{
			icon: <Phone className="h-12 w-12 text-blue-600" />,
			title: t("telemarketing.features.autodial.title"),
			description: t("telemarketing.features.autodial.description"),
		},
		{
			icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
			title: t("telemarketing.features.analytics.title"),
			description: t("telemarketing.features.analytics.description"),
		},
		{
			icon: <Headphones className="h-12 w-12 text-blue-600" />,
			title: t("telemarketing.features.scripts.title"),
			description: t("telemarketing.features.scripts.description"),
		},
		{
			icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
			title: t("telemarketing.features.templates.title"),
			description: t("telemarketing.features.templates.description"),
		},
		{
			icon: <Clock className="h-12 w-12 text-blue-600" />,
			title: t("telemarketing.features.scheduling.title"),
			description: t("telemarketing.features.scheduling.description"),
		},
		{
			icon: <Database className="h-12 w-12 text-blue-600" />,
			title: t("telemarketing.features.logs.title"),
			description: t("telemarketing.features.logs.description"),
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("telemarketing.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("telemarketing.features.subtitle")}
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
