import { Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Screenshots() {
	const { t } = useTranslation();

	const screenshots = [
		{
			title: "Dashboard",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
			description: "Financial overview at a glance",
		},
		{
			title: "General Ledger",
			image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
			description: "Complete ledger management",
		},
		{
			title: "Invoice Management",
			image: "https://images.unsplash.com/photo-1544263882-8162-2269f0d7e6c6?auto=format&fit=crop&q=80&w=600",
			description: "Create and track invoices",
		},
		{
			title: "Financial Reports",
			image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
			description: "Comprehensive reporting",
		},
		{
			title: "Accounts Payable",
			image: "https://images.unsplash.com/photo-155674074-325c-99a1ab3859e2?auto=format&fit=crop&q=80&w=600",
			description: "Manage vendor payments",
		},
	];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
						<Monitor className="h-4 w-4 mr-2" />
						{t("accounting.screenshots.badge")}
					</div>
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("accounting.screenshots.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("accounting.screenshots.subtitle")}
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
