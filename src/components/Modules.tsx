import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { moduleCategories } from "../lib/modules";
import { getCurrentLocaleFromPath, getLangPrefix } from "../lib/website";

export default function Modules() {
	const { t } = useTranslation();
	const location = useLocation();
	const currentLang = getCurrentLocaleFromPath(location.pathname);
	const langPrefix = getLangPrefix(currentLang);

	return (
		<section className="section-enterprise bg-white">
			<div className="container-enterprise">
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
						{t("modules.badge")}
					</div>
					<h2 className="text-enterprise-primary mb-6">{t("modules.title")}</h2>
					<p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
						{t("modules.subtitle")}
					</p>
				</div>

				<div className="space-y-16">
					{moduleCategories.map((category) => (
						<div key={category.key}>
							<div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
								<div>
									<p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
										{t(`navigation.categories.${category.key}.label`)}
									</p>
									<h3 className="mt-2 text-2xl md:text-3xl font-bold text-enterprise-primary">
										{t(`navigation.categories.${category.key}.tagline`)}
									</h3>
								</div>
								<span className="text-sm font-medium text-slate-400">
									{category.modules.length} {t("navigation.modules").toLowerCase()}
								</span>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{category.modules.map((module) => {
									const Icon = module.icon;
									return (
										<Link
											key={module.key}
											to={`${langPrefix}/modules/${module.slug}`}
											className="card-feature group cursor-pointer"
										>
											<div
												className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${module.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
											>
												<Icon className="h-8 w-8 text-white" />
											</div>
											<h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
												{t(module.titleKey)}
											</h3>
											<p className="text-enterprise-secondary leading-relaxed">
												{t(module.descKey)}
											</p>
											<div className="mt-6 inline-flex items-center gap-1.5 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
												{t("common.learnMore")}
												<ArrowRight className="h-4 w-4" />
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 flex justify-center">
					<Link to={`${langPrefix}/modules`} className="btn-primary group">
						{t("navigation.exploreAll")}
						<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</div>
		</section>
	);
}
