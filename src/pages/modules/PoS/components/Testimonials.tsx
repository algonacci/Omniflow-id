import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
	{
		quote: "Omniflow PoS has revolutionized our checkout process. Sales are 30% faster and our customers love the quick service.",
		author: "David Kim",
		position: "Store Manager",
		company: "RetailMax Inc.",
		rating: 5,
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote: "The offline mode is a lifesaver. Even when internet goes down, we can still process sales without interruption.",
		author: "Maria Rodriguez",
		position: "Operations Lead",
		company: "TechStore",
		rating: 5,
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
	},
	{
		quote: "Integration with our inventory system is seamless. Real-time stock updates prevent overselling and reduce waste.",
		author: "James Wilson",
		position: "Franchise Owner",
		company: "FreshMart",
		rating: 5,
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
	},
];

export default function Testimonials() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-6">
						<Star className="h-4 w-4 mr-2" />
						{t("pos.testimonials.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("pos.testimonials.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("pos.testimonials.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="card-enterprise p-8 relative">
							<div className="absolute top-6 right-6 text-orange-200">
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
									<p className="text-sm text-orange-600 font-medium">
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
							{t("pos.testimonials.joinSuccess.title")}
						</h3>
						<p className="text-enterprise-secondary mb-6">
							{t("pos.testimonials.joinSuccess.description")}
						</p>
						<button className="btn-primary">
							{t("pos.testimonials.joinSuccess.scheduleDemo")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
