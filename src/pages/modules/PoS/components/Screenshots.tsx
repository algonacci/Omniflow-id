import { Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Screenshots() {
	const { t } = useTranslation();

	const screenshots = [
		{
			title: "POS Dashboard",
			image: "https://images.unsplash.com/photo-155674074-325c-99a1ab3859e2?auto=format&fit=crop&q=80&w=600",
			description: "Complete POS interface with product catalog",
		},
		{
			title: "Payment Processing",
			image: "https://images.unsplash.com/photo-155674074-325c-99a1ab3859e3?auto=format&fit=crop&q=80&w=600",
			description: "Multiple payment methods support",
		},
		{
			title: "Receipt Management",
			image: "https://images.unsplash.com/photo-155674074-325c-99a1ab3859e4?auto=format&fit=crop&q=80&w=600",
			description: "Customizable receipts with branding",
		},
		{
			title: "Sales Reports",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
			description: "Real-time sales analytics",
		},
		{
			title: "Inventory Sync",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f72?auto=format&fit=crop&q=80&w=600",
			description: "Live inventory management",
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-6">
						<Monitor className="h-4 w-4 mr-2" />
						{t("pos.screenshots.badge")}
					</div>
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("pos.screenshots.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("pos.screenshots.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{screenshots.map((screenshot, index) => (
						<div key={index} className="card-enterprise overflow-hidden">
							<div className="relative">
								<img
									src={screenshot.image}
									alt={screenshot.title}
									className="w-full h-48 object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
									<h3 className="text-lg font-bold text-white">
										{screenshot.title}
									</h3>
									<p className="text-sm text-gray-200">
										{screenshot.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
