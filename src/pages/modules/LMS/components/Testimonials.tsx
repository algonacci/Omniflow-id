import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
	const { t } = useTranslation();

	const testimonials = [
		{
			quote: t("lmsModule.testimonials.items.0.quote"),
			author: t("lmsModule.testimonials.items.0.author"),
			role: t("lmsModule.testimonials.items.0.role"),
			company: t("lmsModule.testimonials.items.0.company"),
			rating: 5,
		},
		{
			quote: t("lmsModule.testimonials.items.1.quote"),
			author: t("lmsModule.testimonials.items.1.author"),
			role: t("lmsModule.testimonials.items.1.role"),
			company: t("lmsModule.testimonials.items.1.company"),
			rating: 5,
		},
		{
			quote: t("lmsModule.testimonials.items.2.quote"),
			author: t("lmsModule.testimonials.items.2.author"),
			role: t("lmsModule.testimonials.items.2.role"),
			company: t("lmsModule.testimonials.items.2.company"),
			rating: 5,
		},
	];

	return (
		<section className="section-enterprise bg-gray-50">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-enterprise-primary mb-6">
						{t("lmsModule.testimonials.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-4xl mx-auto">
						{t("lmsModule.testimonials.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="card-enterprise p-8 relative">
							<Quote className="absolute top-6 right-6 h-8 w-8 text-teal-200" />
							<div className="flex gap-1 mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 text-yellow-400 fill-yellow-400"
									/>
									))}
							</div>
							<p className="text-enterprise-secondary mb-6 italic">
								"{testimonial.quote}"
							</p>
							<div>
								<p className="font-semibold text-enterprise-primary">
									{testimonial.author}
								</p>
								<p className="text-sm text-enterprise-secondary">
									{testimonial.role}
								</p>
								<p className="text-sm text-teal-600 font-medium">
									{testimonial.company}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
