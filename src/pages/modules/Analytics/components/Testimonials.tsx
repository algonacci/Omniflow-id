import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
	const { t } = useTranslation();

	const testimonials = [
		{
			quote: t("analytics.testimonials.t1.quote", "The direct integration with BCA and Moka saved our finance team countless hours of reconciliation."),
			author: "Budi Santoso",
			role: "CFO",
			company: "Retail Nusantara",
		},
		{
			quote: t("analytics.testimonials.t2.quote", "OrderOnline data flowing straight into Omniflow Analytics allowed us to pinpoint our best marketing channels instantly."),
			author: "Siti Rahma",
			role: "Marketing Director",
			company: "Digital Commerce ID",
		},
		{
			quote: t("analytics.testimonials.t3.quote", "Majoo sync is phenomenal. We control 12 outlets entirely from this analytics dashboard. Data-driven decisions are finally easy."),
			author: "Hendry Tan",
			role: "Operations Manager",
			company: "Kopi Kenangan Senja",
		},
	];

	return (
		<section className="section-enterprise bg-white py-20">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-enterprise-primary mb-6 text-3xl font-bold">
						{t("analytics.testimonials.title", "Trusted by Leading Brands")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-2xl mx-auto">
						{t("analytics.testimonials.subtitle", "See how businesses leverage Omniflow Analytics for scaling efficiently.")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testi, idx) => (
						<div key={idx} className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform border border-gray-100 shadow-sm flex flex-col h-full bg-slate-50">
							<div className="flex gap-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
								))}
							</div>
							<p className="text-slate-700 italic mb-8 flex-grow text-lg leading-relaxed">"{testi.quote}"</p>
							<div className="flex items-center mt-auto">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4 uppercase">
									{testi.author[0]}
								</div>
								<div>
									<div className="font-bold text-slate-900">{testi.author}</div>
									<div className="text-sm text-slate-500">
										{testi.role}, {testi.company}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
