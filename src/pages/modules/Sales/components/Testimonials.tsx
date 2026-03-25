import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
	{
		quote:
			"Omniflow's Sales module has completely transformed how our team manages opportunities. We've seen a significant increase in deal closure rates since implementation.",
		author: "David Wilson",
		position: "Sales Director",
		company: "Enterprise Solutions",
		rating: 5,
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote:
			"The sales pipeline visibility we now have is invaluable. Our management team can make better decisions with real-time data and forecasting features.",
		author: "Jessica Martinez",
		position: "VP Sales",
		company: "Growth Accelerators",
		rating: 5,
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote:
			"The mobile app is a game-changer for our field sales team. They can update deals on the go, and the integration with email is seamless.",
		author: "Robert Thompson",
		position: "Sales Manager",
		company: "Tech Innovations Ltd",
		rating: 5,
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
	},
];

export default function Testimonials() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						<Star className="h-4 w-4 mr-2" />
						{t("sales.testimonials.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("sales.testimonials.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("sales.testimonials.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="card-enterprise p-8 relative">
							<div className="absolute top-6 right-6 text-blue-200">
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
									<p className="text-sm text-blue-600 font-medium">
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
							{t("sales.testimonials.joinSuccess.title")}
						</h3>
						<p className="text-enterprise-secondary mb-6">
							{t("sales.testimonials.joinSuccess.description")}
						</p>
						<button className="btn-primary">
							{t("sales.testimonials.joinSuccess.scheduleDemo")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
