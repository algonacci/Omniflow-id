import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
	{
		quote: "Omniflow Accounting has transformed our financial operations. The general ledger and reporting features are exceptional.",
		author: "Jennifer Chen",
		position: "CFO",
		company: "FinanceFirst Inc.",
		rating: 5,
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote: "The accounts payable and receivable automation has saved our finance team 20 hours per week. Highly recommended!",
		author: "Michael Brown",
		position: "Finance Manager",
		company: "TechSolutions",
		rating: 5,
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote: "Compliance has never been easier. The built-in controls and audit trails ensure we're always ready for audits.",
		author: "Sarah Lee",
		position: "Controller",
		company: "Global Enterprise",
		rating: 5,
		image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150",
	},
];

export default function Testimonials() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
						<Star className="h-4 w-4 mr-2" />
						{t("accounting.testimonials.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("accounting.testimonials.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("accounting.testimonials.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="card-enterprise p-8 relative">
							<div className="absolute top-6 right-6 text-green-200">
								<Quote className="h-8 w-8" />
							</div>

							<div className="flex items-center mb-4">
								<img
									src={testimonial.image}
									alt={testimonial.author}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div>
									<p className="font-bold text-enterprise-primary">
										{testimonial.author}
									</p>
									<p className="text-sm text-enterprise-muted">
										{testimonial.position}
									</p>
									<p className="text-sm text-green-600 font-medium">
										{testimonial.company}
									</p>
								</div>
							</div>

							<blockquote className="text-enterprise-secondary mb-6 leading-relaxed italic">
								"{testimonial.quote}"
							</blockquote>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="card-enterprise p-8 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold text-enterprise-primary mb-4">
							{t("accounting.testimonials.joinSuccess.title")}
						</h3>
						<p className="text-enterprise-secondary mb-6">
							{t("accounting.testimonials.joinSuccess.description")}
						</p>
						<button className="btn-primary">
							{t("accounting.testimonials.joinSuccess.scheduleDemo")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
