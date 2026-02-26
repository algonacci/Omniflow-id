import { BookOpen, ClipboardList, Database, FileQuestion, BarChart3, Users, Upload, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
	const { t } = useTranslation();

	const features = [
		{
			icon: <ClipboardList className="h-12 w-12 text-teal-600" />,
			title: t("lmsModule.features.assessments.title"),
			description: t("lmsModule.features.assessments.description"),
		},
		{
			icon: <Database className="h-12 w-12 text-teal-600" />,
			title: t("lmsModule.features.questionBank.title"),
			description: t("lmsModule.features.questionBank.description"),
		},
		{
			icon: <FileQuestion className="h-12 w-12 text-teal-600" />,
			title: t("lmsModule.features.questionTypes.title"),
			description: t("lmsModule.features.questionTypes.description"),
		},
		{
			icon: <BarChart3 className="h-12 w-12 text-teal-600" />,
			title: t("lmsModule.features.tracking.title"),
			description: t("lmsModule.features.tracking.description"),
		},
		{
			icon: <Upload className="h-12 w-12 text-teal-600" />,
			title: t("lmsModule.features.bulkUpload.title"),
			description: t("lmsModule.features.bulkUpload.description"),
		},
		{
			icon: <Users className="h-12 w-12 text-teal-600" />,
			title: t("lmsModule.features.multiTenant.title"),
			description: t("lmsModule.features.multiTenant.description"),
		},
		{
			icon: <Award className="h-12 w-12 text-teal-600" />,
			title: t("lmsModule.features.grading.title"),
			description: t("lmsModule.features.grading.description"),
		},
		{
			icon: <BookOpen className="h-12 w-12 text-teal-600" />,
			title: t("lmsModule.features.categories.title"),
			description: t("lmsModule.features.categories.description"),
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("lmsModule.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("lmsModule.features.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
