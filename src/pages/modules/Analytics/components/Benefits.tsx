import { ArrowUpRight, Clock, DollarSign, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Benefits() {
	const { t } = useTranslation();

	const benefits = [
		{
			icon: ArrowUpRight,
			color: "bg-green-100 text-green-600",
			title: t("analytics.benefits.b1.title", "Revenue Growth"),
			description: t("analytics.benefits.b1.desc", "Identify highly profitable items and scale your successful channels seamlessly."),
			stat: "+25%",
		},
		{
			icon: Clock,
			color: "bg-blue-100 text-blue-600",
			title: t("analytics.benefits.b2.title", "Time Saved"),
			description: t("analytics.benefits.b2.desc", "No more manual data entry. Everything is synced automatically."),
			stat: "40hrs/mo",
		},
		{
			icon: DollarSign,
			color: "bg-orange-100 text-orange-600",
			title: t("analytics.benefits.b3.title", "Cost Efficiency"),
			description: t("analytics.benefits.b3.desc", "Reduce operational overheads by knowing exactly where your money goes."),
			stat: "-15%",
		},
		{
			icon: ShieldCheck,
			color: "bg-purple-100 text-purple-600",
			title: t("analytics.benefits.b4.title", "Data Reliability"),
			description: t("analytics.benefits.b4.desc", "Guaranteed data accuracy with ISO-certified security protocols."),
			stat: "100%",
		},
	];

	return (
		<section className="section-enterprise bg-slate-50 py-20">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						{t("analytics.benefits.badge", "Proven Results")}
					</div>
					<h2 className="text-enterprise-primary mb-6 text-3xl font-bold">
						{t("analytics.benefits.title", "Measurable Impact")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("analytics.benefits.subtitle", "Join companies that have transformed their data strategy and achieved remarkable results.")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{benefits.map((benefit, idx) => {
						const Icon = benefit.icon;
						return (
							<div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
								<div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${benefit.color}`}>
									<Icon className="h-7 w-7" />
								</div>
								<div className="text-3xl font-bold text-enterprise-primary mb-2">
									{benefit.stat}
								</div>
								<h3 className="text-lg font-bold text-slate-800 mb-2">
									{benefit.title}
								</h3>
								<p className="text-slate-600 text-sm leading-relaxed">
									{benefit.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
