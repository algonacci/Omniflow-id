import { useTranslation } from "react-i18next";

export default function Screenshots() {
	const { t } = useTranslation();

	const screenshots = [
		{
			title: t("lmsModule.screenshots.dashboard.title"),
			description: t("lmsModule.screenshots.dashboard.description"),
			image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
		},
		{
			title: t("lmsModule.screenshots.assessments.title"),
			description: t("lmsModule.screenshots.assessments.description"),
			image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=500&fit=crop",
		},
		{
			title: t("lmsModule.screenshots.questionBank.title"),
			description: t("lmsModule.screenshots.questionBank.description"),
			image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
		},
	];

	return (
		<section className="section-enterprise bg-gray-50">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("lmsModule.screenshots.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("lmsModule.screenshots.subtitle")}
					</p>
				</div>

				<div className="space-y-16">
					{screenshots.map((screenshot, index) => (
						<div
							key={index}
							className={`flex flex-col ${
								index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
							} gap-12 items-center`}
						>
							<div className="lg:w-1/2">
								<div className="relative rounded-2xl overflow-hidden shadow-enterprise-lg">
									<img
										src={screenshot.image}
										alt={screenshot.title}
										className="w-full h-auto"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
								</div>
							</div>
							<div className="lg:w-1/2">
								<h3 className="text-2xl font-bold text-enterprise-primary mb-4">
									{screenshot.title}
								</h3>
								<p className="text-lg text-enterprise-secondary leading-relaxed">
									{screenshot.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
