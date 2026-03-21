import {
	BarChart3,
	CreditCard,
	LineChart,
	Network,
	PieChart,
	ShoppingCart,
	CheckCircle,
	ShoppingBag,
	Plug,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const featureIcons = [CreditCard, ShoppingCart, PieChart, LineChart, ShoppingBag, Plug];
const featureColors = [
	"from-blue-500 to-blue-600",
	"from-orange-500 to-orange-600",
	"from-red-500 to-red-600",
	"from-emerald-500 to-emerald-600",
	"from-orange-500 to-red-500",
	"from-indigo-500 to-purple-600",
];

export default function Features() {
	const { t } = useTranslation();

    const featureKeys = ["bca", "orderonline", "majoo", "moka", "shopee", "custom"];

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						<Network className="h-4 w-4 mr-2" />
						{t("analytics.features.badge", "Deep Integrations")}
					</div>
					<h2 className="text-enterprise-primary mb-6 text-4xl">
						{t("analytics.features.title", "Powerful Connectors")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("analytics.features.subtitle", "Bring all your data into one powerful analytics dashboard.")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featureKeys.map((featureKey, index) => {
						const Icon = featureIcons[index] || BarChart3;
						const color = featureColors[index] || "from-blue-500 to-blue-600";
						const benefits = [
                            t(`analytics.integrations.${featureKey}.b1`, "Real-time sync"),
                            t(`analytics.integrations.${featureKey}.b2`, "Automated reports"),
                            t(`analytics.integrations.${featureKey}.b3`, "Custom dashboards")
                        ];

						return (
							<div key={featureKey} className="card-feature group flex flex-col h-full hover:shadow-2xl transition-all duration-300">
								<div
									className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} mb-6 w-16 h-16 items-center justify-center group-hover:scale-110 transition-transform duration-300`}
								>
									<Icon className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors capitalize">
									{featureKey === "orderonline" ? "OrderOnline" : featureKey === "custom" ? "Custom & Any API" : featureKey.toUpperCase()}
								</h3>
								<p className="text-enterprise-secondary leading-relaxed mb-6 flex-grow">
									{t(`analytics.integrations.${featureKey}.desc`, "Comprehensive data integration built securely for your business.")}
								</p>
								<ul className="space-y-3 mt-auto pt-6 border-t border-gray-100">
									{benefits.map((benefit: string, idx: number) => (
										<li
											key={idx}
											className="flex items-center text-sm font-medium text-slate-700"
										>
											<CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
											{benefit}
										</li>
									))}
								</ul>
								<div className="mt-8 text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
									{t("common.learnMore")} <span className="text-xl leading-none">→</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
