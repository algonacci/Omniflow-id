import {
	CheckCircle,
	Briefcase,
	Users,
	Coins,
	Shield,
	FileText,
	BarChart,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const featureKeys = ["projects","investors","distribution","kyc","documents","transactions"];
const featureIcons = [Briefcase, Users, Coins, Shield, FileText, BarChart];
const featureColors = [
  "from-blue-500 to-blue-600",
  "from-indigo-500 to-indigo-600",
  "from-sky-500 to-sky-600",
  "from-cyan-500 to-cyan-600",
  "from-blue-400 to-indigo-500",
  "from-indigo-400 to-sky-500"
];

export default function Features() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						<CheckCircle className="h-4 w-4 mr-2" />
						{t("ecf.features.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("ecf.features.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("ecf.features.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featureKeys.map((featureKey, index) => {
						const Icon = featureIcons[index];
						const color = featureColors[index];
						const benefits = t(`ecf.features.${featureKey}.benefits`, {
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
								<h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
									{t(`ecf.features.${featureKey}.title`)}
								</h3>
								<p className="text-enterprise-secondary leading-relaxed mb-4">
									{t(`ecf.features.${featureKey}.description`)}
								</p>
								<ul className="space-y-2">
									{benefitsArray.map((benefit: string, idx: number) => (
										<li
											key={idx}
											className="flex items-center text-sm text-enterprise-muted"
										>
											<CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
											{benefit}
										</li>
									))}
								</ul>
								<div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
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
