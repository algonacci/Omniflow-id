import {
	Award,
	CheckCircle,
	Globe,
	Shield,
	TrendingUp,
	Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Advantages() {
	const { t } = useTranslation();

	const advantages = [
		{
			icon: CheckCircle,
			titleKey: "advantages.allInOne.title",
			descriptionKey: "advantages.allInOne.description",
			statKey: "advantages.allInOne.stat",
			color: "from-blue-500 to-indigo-600",
		},
		{
			icon: TrendingUp,
			titleKey: "advantages.analytics.title",
			descriptionKey: "advantages.analytics.description",
			statKey: "advantages.analytics.stat",
			color: "from-purple-500 to-indigo-600",
		},
		{
			icon: Zap,
			titleKey: "advantages.scalable.title",
			descriptionKey: "advantages.scalable.description",
			statKey: "advantages.scalable.stat",
			color: "from-orange-500 to-red-600",
		},
		{
			icon: Award,
			titleKey: "advantages.costEffective.title",
			descriptionKey: "advantages.costEffective.description",
			statKey: "advantages.costEffective.stat",
			color: "from-emerald-500 to-teal-600",
		},
		{
			icon: Globe,
			titleKey: "advantages.productivity.title",
			descriptionKey: "advantages.productivity.description",
			statKey: "advantages.productivity.stat",
			color: "from-cyan-500 to-blue-600",
		},
		{
			icon: Shield,
			titleKey: "advantages.security.title",
			descriptionKey: "advantages.security.description",
			statKey: "advantages.security.stat",
			color: "from-red-500 to-rose-600",
		},
	];

	return (
		<section className="section-enterprise gradient-secondary">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<h2 className="text-enterprise-primary mb-6">
						{t("advantages.title")}
					</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("advantages.subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{advantages.map((advantage) => (
						<div
							key={advantage.titleKey}
							className="group p-8 bg-white/50 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
						>
							<div
								className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${advantage.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-full`}
							></div>

							<div className="relative z-10">
								<div
									className={`inline-flex p-4 bg-gradient-to-br ${advantage.color} rounded-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}
								>
									<advantage.icon className="h-7 w-7 text-white" />
								</div>

								<h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
									{t(advantage.titleKey)}
								</h3>

								<p className="text-slate-600 leading-relaxed mb-8 flex-grow">
									{t(advantage.descriptionKey)}
								</p>

								<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/50 text-blue-700 rounded-xl text-sm font-bold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
									<TrendingUp className="h-4 w-4" />
									{t(advantage.statKey)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
