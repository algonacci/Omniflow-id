import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
	{
		quote:
			"Omniflow's Asset Management has transformed how we track and maintain our company assets. The automated depreciation calculations have saved our accounting team significant time.",
		author: "Thomas Wilson",
		position: "Finance Manager",
		company: "Industrial Solutions",
		rating: 5,
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote:
			"The maintenance scheduling and tracking features have reduced our downtime significantly. Our operations team now has complete visibility into asset health.",
		author: "Margaret Chen",
		position: "Operations Director",
		company: "Manufacturing Excellence",
		rating: 5,
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote:
			"The reporting capabilities give us the insights we need for strategic asset planning. The ROI has been significant, and implementation was incredibly smooth.",
		author: "Richard Thompson",
		position: "Asset Manager",
		company: "Enterprise Corp",
		rating: 5,
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
	},
];

export default function Testimonials() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-semibold mb-6">
						<Star className="h-4 w-4 mr-2" />
						{t("assetManagement.testimonials.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("assetManagement.testimonials.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("assetManagement.testimonials.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="card-enterprise p-8 relative">
							<div className="absolute top-6 right-6 text-violet-200">
								<Quote className="h-8 w-8" />
							</div>

							<div className="flex items-center mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 text-yellow-400 fill-current"
									/>
								))}
							</div>

							<blockquote className="text-enterprise-secondary mb-6 leading-relaxed italic">
								"{testimonial.quote}"
							</blockquote>

							<div className="flex items-center space-x-4">
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
									<p className="text-sm text-violet-600 font-medium">
										{testimonial.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="card-enterprise p-8 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold text-enterprise-primary mb-4">
							{t("assetManagement.testimonials.joinSuccess.title")}
						</h3>
						<p className="text-enterprise-secondary mb-6">
							{t("assetManagement.testimonials.joinSuccess.description")}
						</p>
						<button className="btn-primary">
							{t("assetManagement.testimonials.joinSuccess.scheduleDemo")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
