import {
	BarChart,
	CheckCircle,
	Package,
	TrendingUp,
	Wrench,
	Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const featureKeys = [
	"tracking",
	"depreciation",
	"lifecycle",
	"maintenance",
	"reports",
	"integration",
];
const featureIcons = [Package, TrendingUp, CheckCircle, Wrench, BarChart, Zap];
const featureColors = [
	"from-violet-500 to-violet-600",
	"from-purple-500 to-purple-600",
	"from-fuchsia-500 to-fuchsia-600",
	"from-pink-500 to-pink-600",
	"from-rose-500 to-rose-600",
	"from-red-500 to-red-600",
];

export default function Features() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-semibold mb-6">
						<CheckCircle className="h-4 w-4 mr-2" />
						{t("assetManagement.features.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("assetManagement.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("assetManagement.features.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featureKeys.map((featureKey, index) => {
						const Icon = featureIcons[index];
						const color = featureColors[index];
						const benefits = t(`assetManagement.features.${featureKey}.benefits`, {
							returnObjects: true,
						});
						const benefitsArray = Array.isArray(benefits) ? benefits : [];

						return (
							<div key={featureKey} className="card-feature group">
								<div
									className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<Icon className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-violet-600 transition-colors">
									{t(`assetManagement.features.${featureKey}.title`)}
								</h3>
								<p className="text-enterprise-secondary leading-relaxed mb-4">
									{t(`assetManagement.features.${featureKey}.description`)}
								</p>
								<ul className="space-y-2">
									{benefitsArray.map((benefit: string, idx: number) => (
										<li
											key={idx}
											className="flex items-center text-sm text-enterprise-muted"
										>
											<CheckCircle className="h-4 w-4 text-violet-500 mr-2 flex-shrink-0" />
											{benefit}
										</li>
									))}
								</ul>
								<div className="mt-6 text-violet-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
									{t("common.learnMore")} →
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
