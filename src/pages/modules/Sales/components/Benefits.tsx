import { Award, Clock, DollarSign, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const benefitKeys = ["productivity", "speed", "increase", "visibility"];
const benefitIcons = [TrendingUp, Clock, DollarSign, Award];
const benefitColors = [
	"from-blue-500 to-blue-600",
	"from-indigo-500 to-indigo-600",
	"from-cyan-500 to-cyan-600",
	"from-sky-500 to-sky-600",
];

export default function Benefits() {
	const { t } = useTranslation();

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						<Award className="h-4 w-4 mr-2" />
						{t("sales.benefits.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">
						{t("sales.benefits.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("sales.benefits.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{benefitKeys.map((benefitKey, index) => {
						const Icon = benefitIcons[index];
						const color = benefitColors[index];
						return (
							<div
								key={benefitKey}
								className="card-enterprise p-8 text-center group"
							>
								<div
									className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<Icon className="h-8 w-8 text-white" />
								</div>
								<div className="text-3xl font-bold text-blue-600 mb-2">
									{t(`sales.benefits.${benefitKey}.stat`)}
								</div>
								<h3 className="text-xl font-bold text-enterprise-primary mb-3">
									{t(`sales.benefits.${benefitKey}.title`)}
								</h3>
								<p className="text-enterprise-secondary leading-relaxed">
									{t(`sales.benefits.${benefitKey}.description`)}
								</p>
							</div>
						);
					})}
				</div>

				<div className="mt-16 text-center">
					<div className="card-enterprise p-12 max-w-4xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
							<div className="text-center">
								<div className="text-4xl font-bold text-blue-600 mb-2">
									50,000+
								</div>
								<p className="text-enterprise-muted">
									{t("sales.benefits.organizations")}
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-indigo-600 mb-2">
									99.9%
								</div>
								<p className="text-enterprise-muted">
									{t("sales.benefits.uptime")}
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-cyan-600 mb-2">
									24/7
								</div>
								<p className="text-enterprise-muted">
									{t("sales.benefits.support")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
